<template>
    <div class="top-header" :style="`background-color: ${colors.navbar_color ? colors.navbar_color : databaseColor.navbar_color
        };`">
        <div class="topbar">
            <div class="row">

                <div class="col-2 col-sm-1 col-md-1 col-lg-3 left-info-col align-self-center">
                    <div class="left-info d-flex">
                        <div class="mobile-control-bar d-block d-lg-none">
                            <i class="fas fa-bars" aria-hidden="true"></i>
                        </div>
                        <div class="control-bar d-none d-lg-block">
                            <i class="fas fa-bars" aria-hidden="true"></i>
                        </div>
                        <div class="expand">
                            <i class="fas fa-arrows-alt" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div class="col-8 col-sm-7 col-md-8 col-lg-6 d-flex align-items-center justify-content-center">
                    <p class="text-white bold text-center">{{ loggedInfo() }}</p>
                </div>

                <div class="col-2 col-sm-4 col-md-3 col-lg-3 right-info-col">
                    <div class="right-info header-right-info text-end d-flex justify-content-end align-items-center">
                        <div class="profile dropdown">
                            <ul class="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <li class="profile-image">
                                    <img :src="user.profile !== '' ? user.profile : `${asset}profile.jpg`
                                        " alt="profile" />
                                </li>
                                <li>
                                    <span class="d-none d-sm-inline-block">{{ user?.name }}</span>
                                    <i class="px-1 fas fa-angle-down" aria-hidden="true"></i>
                                </li>
                            </ul>

                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li v-if="$root.global.app_env == 'local'">
                                    <a :href="`${$root.baseurl}/clear`"><i class="fa fa-broom text-aqua"></i>Cache
                                        Clear</a>
                                </li>
                                <li v-if="$root.global.app_env == 'local'">
                                    <a :href="`${$root.baseurl}/admin/systems-update`"><i class="fa fa-sync"></i>Systems
                                        Update</a>
                                </li>
                                <li>
                                    <a :href="`${$root.baseurl}/admin/siteSetting/1/edit`"><i
                                            class="fa fa-cog text-aqua"></i>Settings</a>
                                </li>
                                <li>
                                    <a :href="`${$root.baseurl}/admin/profile-details/${user?.id}`"><i
                                            class="fa fa-user-o"></i>Profile</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" @click="logout()">
                                        <i class="fas fa-sign-out-alt"></i> Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- navbar part start -->
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState("setting", ["colors"]),
    },
    data() {
        return {
            profile: false,
            message: false,
            notification: false,
        };
    },
    methods: {
        async logout() {
            const res = await this.callApi("post", "logout");
            if (res.status == 200) {
                this.$store.dispatch("auth/logout");
                this.$toast(res.data.message, "success");
                window.location.href = this.$root.baseurl + "/qpanel";
            }
        },
        loggedInfo() {
            const today = new Date();
            const options = {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
            };
            const formattedDate = today.toLocaleDateString("en-US", options);
            const loggedInfo = `You Logged as ${this.ucfirst(this.$root.user.name)}`;

            return `${loggedInfo}, ${formattedDate}`;
        },
    },

    mounted() {
        // collapsed sidebar js
        $(".control-bar i").click(function () {
            $("body").toggleClass("collapsed-menu");
        });

        $(".mobile-control-bar i").click(function () {
            $(".navigation-body").addClass("show-mobile-sidebar");
            body.style.overflow = "hidden";
        });

        $(".mobile-control-bar i").click(function () {
            $(".toggle-overlay").addClass("show-toggle-overlay");
            body.style.overflow = "hidden";
        });

        $(".close-mobile-menu i").click(function () {
            $(".navigation-body").removeClass("show-mobile-sidebar");
            body.style.overflow = "auto";
        });

        $(".close-mobile-menu i").click(function () {
            $(".toggle-overlay").removeClass("show-toggle-overlay");
            body.style.overflow = "auto";
        });

        $(".toggle-overlay").click(function () {
            $(".toggle-overlay").removeClass("show-toggle-overlay");
            body.style.overflow = "auto";
        });

        $(".toggle-overlay").click(function () {
            $(".navigation-body").removeClass("show-mobile-sidebar");
            body.style.overflow = "auto";
        });

        // Request full screen js
        const arrows = document.querySelector(".fa-arrows-alt");
        const body = document.querySelector("body");

        const toggleFullscreen = () => {
            if (document.fullscreenElement) document.exitFullscreen();
            else body.requestFullscreen();
        };

        // fixed header part js
        $(window).scroll(function () {
            let scrolling = $(this).scrollTop();
            if (scrolling > 0) {
                $(".top-header").addClass("fixed");
            } else {
                $(".top-header").removeClass("fixed");
            }
        });
    },
};
</script>

<style scoped>
.margin-top-10 {
    margin-top: 10px !important;
}
</style>
