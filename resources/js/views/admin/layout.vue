<template>
    <main class="qcms">
        <AppSidebar />
        <div class="right_content">
            <AppNav />
            <div class="content_body position-relative">
                <div class="content_main">
                    <router-view></router-view>
                </div>
                <AppFooter />
            </div>
        </div>
    </main>
</template>

<script>
import AppNav from "./../../components/AppNav.vue";
import AppFooter from "./../../components/AppFooter.vue";
import AppSidebar from "./../../components/AppSidebar.vue";
import AppBreadcrumb from "./../../components/AppBreadcrumb.vue";

export default {
    components: {
        AppNav,
        AppFooter,
        AppSidebar,
        AppBreadcrumb,
    },
};
</script>
