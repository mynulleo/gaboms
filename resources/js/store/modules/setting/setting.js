export default {
    namespaced: true,
    state: () => ({
        colors: {
            sidebar_top_color: null,
            sidebar_footer_color: null,
            sidebar_color: null,
            navbar_color: null,
            breadcrumb_color:null
        },
    }),
    mutations: {
        setSidebarFooterColor(state, payload) {
            state.colors.sidebar_footer_color = payload;
        },
        setSidebarTopColor(state, payload) {
            state.colors.sidebar_top_color = payload;
        },
        setNavbarColor(state, payload) {
             state.colors.navbar_color = payload;
        },
        setSidebarColor(state, payload) {
             state.colors.sidebar_color = payload;
        },
        setBreadcrumbColor(state, payload) {
            state.colors.breadcrumb_color = payload;
        },
    },
    actions: {

    }
}
