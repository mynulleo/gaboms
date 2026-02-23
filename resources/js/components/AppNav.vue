<template>
    <header class="header_area w-100">
        <div class="row">
            <div class="col-md-4 col-4 align-self-center">
                <div class="header_left">
                    <div class="main d-flex gap-2 align-items-center">
                        <div class="sidebar_control_bar">
                            <button type="button" class="sidebar_control_btn border-0" data-bs-toggle="tooltip"
                                data-bs-placement="top" data-bs-title="Navbar" v-x-tooltip>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 6h16" />
                                    <path d="M7 12h13" />
                                    <path d="M10 18h10" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8 col-8 align-self-center">
                <div class="header_right d-flex align-items-center justify-content-end gap-4">
                    <div class="date_time position-relative">
                        <p id="currentDateTime"></p>
                    </div>
                    <div class="action_info d-flex gap-4 align-items-center">
                        <div class="icon_box position-relative">
                            <button type="button"
                                class="icon_btn dropdown_menu bg-transparent border-0 position-relative"
                                data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Messages" v-x-tooltip>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-message">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M8 9h8" />
                                    <path d="M8 13h6" />
                                    <path
                                        d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                                </svg>
                                <sup
                                    class="notification_number position-absolute rounded-pill d-flex justify-content-center align-items-center">{{
                                        $root.global?.notify_contacts?.length >
                                            5
                                            ? "5+"
                                            : $root.global?.notify_contacts
                                                ?.length
                                    }}</sup>
                            </button>
                            <div
                                class="information_box dropdown_menu_info messages_information position-absolute top-100 end-0 x_top_message_dropdown_box">
                                <div class="top d-flex justify-content-between align-items-center gap-4">
                                    <h3 class="title">Messages</h3>
                                </div>
                                <div class="list">
                                    <ul class="list-unstyled">
                                        <li>
                                            <h4 class="no_list">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="icon icon-tabler icons-tabler-outline icon-tabler-alarm-minus">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                                        <path d="M7 4l-2.75 2" />
                                                        <path d="M17 4l2.75 2" />
                                                        <path d="M10 13h4" />
                                                    </svg>
                                                </div>
                                                No Messages Found
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                                <div class="btm text-center">

                                </div>
                            </div>
                        </div>
                        <div class="user_box position-relative">
                            <button type="button"
                                class="user_image dropdown_menu rounded-pill bg-transparent border-0 position-relative"
                                data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Profile" v-x-tooltip>
                                <img class="rounded-pill w-100 h-100 object-fit-cover" :src="user?.profile_three ??
                                    `${$root.asset_url}/images/profile.jpg`
                                    " alt="profile-user" />
                            </button>
                            <div class="user_information position-absolute dropdown_menu_info">
                                <div class="edit_image text-center">
                                    <div class="image position-relative">
                                        <img :src="user?.profile_one ??
                                            `${$root.asset_url}/images/profile.jpg`
                                            " :href="user?.profile_two" v-x-zoom-image alt="profile-edit" />
                                    </div>
                                    <div class="name text-center">
                                        <h4 class="nm">
                                            {{ $root.user.name }}
                                        </h4>
                                        <router-link :to="{
                                            name: 'profile.profileDetails',
                                        }" class="edit">Edit Your Profile</router-link>
                                    </div>
                                    <div class="menus text-start">
                                        <ul class="list-unstyled">
                                            <li v-for="(
profileMenu,
    profileMenuIndex
                                                ) in $root.global
        ?.profile_menus" :key="`profile_menu_${profileMenuIndex}`">
                                                <router-link v-if="profileMenu.params" :to="{
                                                    name: profileMenu.route_name,
                                                    params: {
                                                        slug: profileMenu.params,
                                                    },
                                                }">
                                                    <span class="menu_icon" v-if="profileMenu.icon" v-html="profileMenu.icon
                                                        "></span>
                                                    {{ profileMenu.menu_name }}
                                                </router-link>

                                                <router-link v-else :to="{
                                                    name: profileMenu.route_name,
                                                }">
                                                    <span v-if="profileMenu.icon" v-html="profileMenu.icon
                                                        "></span>
                                                    {{ profileMenu.menu_name }}
                                                </router-link>
                                            </li>

                                            <li>
                                                <a href="javascript:void(0)" @click.prevent="logout()">
                                                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                                    Log Out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
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
            const res = await this.callApi("post", "logout", null, false);
            if (res.status == 200) {
                this.$store.dispatch("auth/logout");
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
            const loggedInfo = `You Logged as ${this.ucfirst(
                this.$root.user.name
            )}`;

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
