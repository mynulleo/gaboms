export default {
    namespaced: true,

    state: () => ({
        site: {},
        global: {},
        menus: {},
        permissions: {},
        sliderPosition: {},
        sliderButtonTypes: {},
        keyword: "",
        categoriesModuleNames: {},
        unitModuleNames: {},
        colors: {
            sidebar_footer_color: "#fffff",
            sidebar_top_color: "#fffff",
            sidebar_color: "#2f3a4e",
            navbar_color: "#61daff",
        },
    }),

    mutations: {
        setGlobalData(state, data) {
            state.site = data.site;
            state.menus = data.menus;
            state.filteredMenus = data.menus;
            state.global = data.global;
            state.permissions = data.permissions;
            state.sliderPosition = data.sliderPosition;
            state.sliderLists = data.sliderLists;
            state.sliderButtonTypes = data.sliderButtonTypes;
            state.categoriesModuleNames = data.categoriesModuleNames;
            state.colors = {
                sidebar_footer_color: data.site.sidebar_footer_color,
                sidebar_top_color: data.site.sidebar_top_color,
                sidebar_color: data.site.sidebar_color,
                navbar_color: data.site.navbar_color,
            };
        },

        filterMenus(state) {
            if (state.keyword === "") {
                state.filteredMenus = state.menus;
            } else {
                state.filteredMenus = state.menus.filter((menu) => {
                    return menu.menu_name
                        .toLowerCase()
                        .includes(state.keyword.toLowerCase());
                });
            }
        },

        setKeyword(state, keyword) {
            state.keyword = keyword;
        },
    },
    actions: {
        setGlobal(context, data) {
            context.commit("setGlobalData", data);
        },
        updateKeyword(context, keyword) {
            context.commit("setKeyword", keyword);
            context.commit("filterMenus");
        },
    },
};
