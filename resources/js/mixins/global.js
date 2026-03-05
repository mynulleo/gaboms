export default {
    computed: {
        asset() {
            return `${laravel.baseurl}/public/images/`;
        },
        site() {
            return this.$store.state.global.site;
        },
        global() {
            return this.$store.state.global.global;
        },
        menus() {
            return this.$store.state.global.menus;
        },
        filteredMenus() {
            return this.$store.state.global.filteredMenus;
        },
        permissions() {
            return this.$store.state.global.permissions;
        },
        sliderPosition() {
            return this.$store.state.global.sliderPosition;
        },
        sliderLists() {
            return this.$store.state.global.sliderLists;
        },
        sliderButtonTypes() {
            return this.$store.state.global.sliderButtonTypes;
        },
        categoriesModuleNames() {
            return this.$store.state.global.categoriesModuleNames;
        },
        databaseColor() {
            return this.$store.state.global.colors;
        },
        loggedIn() {
            return this.$store.state.auth.user ? true : false;
        },
        user() {
            return this.$store.state.auth.user;
        },
        role_name() {
            return this.$store.state.auth.role;
        },
        breadcrumbs() {
            return this.$store.state.breadcrumb.levels;
        },
        noimage() {
            return `${laravel.baseurl}/images/img-cover.png`;
        },
        attach() {
            return `${laravel.baseurl}/images/pdf-cover.png`;
        },
    },
};
