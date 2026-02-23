<template>
    <ul class="list-unstyled sub_menu">
        <li v-for="(child_menu, index) in child_menus" :key="`sub_menu_${index}`">
            <template v-if="Object.keys(child_menu.child_menus).length > 0">
                <a href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="right"
                    :data-bs-title="child_menu.menu_name" v-x-tooltip="child_menu.menu_name.length >= tooltipLength">
                    <div class="menu_icon" v-if="child_menu.icon" v-html="child_menu.icon"></div>
                    <div class="menu_icon" v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-minus">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l14 0" />
                        </svg>
                    </div>
                    <div class="menu_name">
                        {{ limitString(child_menu.menu_name, tooltipLength) }}
                    </div>
                    <div class="menu_info" v-if="Object.keys(child_menu.child_menus).length > 0">
                        <div class="arrow_icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M6 9l6 6l6 -6" />
                            </svg>
                        </div>
                    </div>
                </a>

                <!-- ===================Children Menu=================== -->
                <AppSidebarRecursive :child_menus="child_menu.child_menus" :tooltip-length="16" />
                <!-- ===================Children Menu=================== -->
            </template>
            <template v-else>
                <router-link v-if="$root.checkPermission(child_menu.route_name)" :to="{
                    name: child_menu.route_name,
                    params: { slug: child_menu.params },
                }" :class="isMenuActive(child_menu.route_name) ? 'router-link-active active' : ''" data-bs-toggle="
                    tooltip" data-bs-placement="right" :data-bs-title="child_menu.menu_name"
                    v-x-tooltip="child_menu.menu_name.length >= tooltipLength">
                    <div class="menu_icon" v-if="child_menu.icon" v-html="child_menu.icon"></div>
                    <div class="menu_icon" v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-minus">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l14 0" />
                        </svg>
                    </div>
                    <div class="menu_name">
                        {{ limitString(child_menu.menu_name, tooltipLength) }}
                    </div>
                </router-link>
            </template>
        </li>
    </ul>
</template>

<script>
export default {
    name: "AppSidebarRecursive",
    props: {
        child_menus: {
            type: Array,
            default: [],
        },
        currentActiveRoute: {
            type: String,
            default: "",
        },

        tooltipLength: {
            type: Number,
            default: 15,
        },
    },

    computed: {
        activeRouteNamePrefix() {
            const parts = this.$route.name.split(".");
            return parts[0] + ".";
        },
    },
    methods: {
        isMenuActive(routeName) {
            if (!routeName) return false;
            const prefix = this.activeRouteNamePrefix;
            if (prefix === "report." || prefix === "bulkdataimport.") return false;
            return routeName.startsWith(prefix);
        },
    },
    mounted() {
        // Hide all sub-menus initially
        $(".menu_item ul").hide();
    },
};
</script>
