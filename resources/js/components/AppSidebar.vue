<template>
    <aside class="sidebar position-fixed top-0 start-0 h-100 w-100">
        <div class="d-flex justify-content-between align-items-center gap-4">
            <div class="logo">
                <router-link :to="{ name: 'dashboard.index' }">
                    <template v-if="site?.logo_two && site.logo_two.trim() !== ''">
                        <img width="140" :src="site.logo_two" alt="logo" />
                    </template>
                    <template v-else>
                        <div class="residence-short">
                            {{ getResidenceShortName(user?.residence?.residence_name) }}
                        </div>
                    </template>
                </router-link>
            </div>
            <button class="close_mobile_sidebar bg-transparent border-0 d-block d-lg-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-x">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                </svg>
            </button>
        </div>

        <div class="menu_list">
            <ul class="list-unstyled" v-if="filteredMenus && Object.keys(menus).length > 0">
                <template v-for="(root_menu, index) in filteredMenus">
                    <template v-if="
                        root_menu.child_menus &&
                        Object.keys(root_menu.child_menus).length > 0
                    ">
                        <li class="menu_item" :key="`parent_menu_${index}`">
                            <a href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="right"
                                :data-bs-title="root_menu.menu_name"
                                :class="isMenuActive(root_menu.route_name) ? 'router-link-active active' : ''"
                                v-x-tooltip="root_menu.menu_name.length >= tooltipLength
                                    ">
                                <div class="menu_icon" v-if="root_menu.icon" v-html="root_menu.icon"></div>
                                <div class="menu_name">
                                    {{
                                        limitString(
                                            root_menu.menu_name,
                                            tooltipLength
                                        )
                                    }}
                                </div>
                                <div class="menu_info">
                                    <div class="arrow_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M6 9l6 6l6 -6" />
                                        </svg>
                                    </div>
                                </div>
                            </a>

                            <RecursiveMenu :key="index + 'A'" :child_menus="root_menu.child_menus"
                                :currentActiveRoute="currentActiveRoute" />
                        </li>
                    </template>

                    <template v-else>
                        <li class="menu_item" :key="`parent_menu_${index}`" v-if="
                            root_menu.route_name &&
                            $root.checkPermission(root_menu.route_name)
                        ">
                            <!-- MENU  WITH PARAMS-->
                            <router-link v-if="root_menu.params" :to="{
                                name: root_menu.route_name,
                                params: { slug: root_menu.params },
                            }" :class="isMenuActive(root_menu.route_name) ? 'router-link-active active' : ''"
                                data-bs-toggle="tooltip" data-bs-placement="right" :data-bs-title="root_menu.menu_name"
                                v-x-tooltip="root_menu.menu_name.length >= tooltipLength
                                    ">
                                <div class="menu_icon" v-if="root_menu.icon" v-html="root_menu.icon"></div>
                                <div class="menu_name">
                                    {{
                                        limitString(
                                            root_menu.menu_name,
                                            tooltipLength
                                        )
                                    }}
                                </div>
                            </router-link>

                            <!-- SINGLE MENU -->
                            <router-link v-else :to="{ name: root_menu.route_name }"
                                :class="isMenuActive(root_menu.route_name) ? 'router-link-active active' : ''"
                                data-bs-toggle="tooltip" data-bs-placement="right" :data-bs-title="root_menu.menu_name"
                                v-x-tooltip="root_menu.menu_name.length >= tooltipLength
                                    ">
                                <div class="menu_icon" v-if="root_menu.icon" v-html="root_menu.icon"></div>
                                <div class="menu_name">
                                    {{
                                        limitString(
                                            root_menu.menu_name,
                                            tooltipLength
                                        )
                                    }}
                                </div>
                            </router-link>
                        </li>
                    </template>
                </template>
            </ul>
        </div>

        <div class="log_out" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Log Out" v-x-tooltip>
            <a href="javascript:void(0)" class="logout_btn" @click.prevent="logout">
                <div class="text">Log Out</div>
                <span class="sign">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-logout">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                        <path d="M9 12h12l-3 -3" />
                        <path d="M18 15l3 -3" />
                    </svg>
                </span>
            </a>
        </div>

        <div class="log_out2 d-none">
            <a href="javascript:void(0)" class="logout_btn2" @click.prevent="logout">
                <span class="sign">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-logout">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                        <path d="M9 12h12l-3 -3" />
                        <path d="M18 15l3 -3" />
                    </svg>
                </span>
            </a>
        </div>
    </aside>
</template>

<script>
import { mapState } from "vuex";
import RecursiveMenu from "./AppSidebarRecursive";
import RecursiveMenuCollasped from "./AppSidebarCollaspedRecursive";

export default {
    components: { RecursiveMenu, RecursiveMenuCollasped },
    computed: {
        activeRoute() {
            return this.$route.name;
        },
        currentRouteName() {
            return this.$route.name;
        },

        activeRouteNamePrefix() {
            const parts = this.$route.name.split(".");
            return parts[0] + ".";
        },

        ...mapState("setting", ["colors"]),
    },

    data() {
        return {
            keyword: "",
            activeRouteSecondary: "",
            currentActiveRoute: "",
            tooltipLength: 20,
        };
    },

    watch: {
        $route(newRoute, lastRoute) {
            this.isActiveRoute(this.currentRouteName);
        },
    },

    methods: {
        isMenuActive(routeName) {
            if (!routeName) return false;
            const prefix = this.activeRouteNamePrefix;
            if (prefix === "report." || prefix === "bulkdataimport.") return false;
            return routeName.startsWith(prefix);
        },

        isActiveRoute(routeName) {
            const parts = routeName.split(".");
            let extractedName = parts[0];
            const makeActivableRoute = (extractedName += ".index");

            const element = document.querySelector(
                `[data-route="${makeActivableRoute}"]`
            );

            if (element) {
                this.currentActiveRoute = makeActivableRoute;
            }
        },

        search() {
            this.$store.dispatch("global/updateKeyword", this.keyword);
        },

        getResidenceShortName(name) {
            if (!name) return "";

            // শব্দ গুলো ভেঙে নিই
            const words = name.trim().split(/\s+/);

            // যদি একটাই শব্দ হয় → প্রথম ৩টা অক্ষর
            if (words.length === 1) {
                return words[0].substring(0, 3).toUpperCase();
            }

            // একাধিক শব্দ হলে প্রতিটার প্রথম অক্ষর
            const initials = words.map(w => w.charAt(0).toUpperCase()).join("");

            return initials;
        },

        async logout() {
            this.$root.spinner = true;
            const res = await this.callApi("post", "logout");
            if (res.status == 200) {
                this.$root.spinner = false;
                this.$store.dispatch("auth/logout");
                this.$toast(res.data.message, "success");
                window.location.href = this.$root.baseurl + "/";
            }
        },
    },

    mounted() {
        $(".menu_item ul").hide();
        let Accordion = function (el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;
            let links = this.el.find(".link");
            links.on(
                "click",
                {
                    el: this.el,
                    multiple: this.multiple,
                },
                this.dropdown
            );
        };
        Accordion.prototype.dropdown = function (e) {
            let el = e.data.el;
            (window.$this = window.$(this)),
                (window.$next = window.$this.next());
            window.$next.slideToggle();
            window.$this.parent().toggleClass("open");
            if (!e.data.multiple) {
                el.find(".submenu")
                    .not(window.$next)
                    .slideUp()
                    .parent()
                    .removeClass("open");
            }
        };
        new Accordion(window.$("#accordion"), false);
    },
};
</script>
<style scoped>
.residence-short {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    /* height: 60px; */
    border-radius: 12px;
    background: linear-gradient(204deg, #27272b, #0d6b68);
    color: #fff;
    font-size: 28px;
    font-weight: 700;
    text-transform: uppercase;
    font-family: "Poppins", "Segoe UI", sans-serif;
    letter-spacing: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    transition: all 0.3s ease;
}

.residence-short:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
}
</style>