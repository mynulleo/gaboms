export default {
    namespaced: true,
    state: () => ({
       inherit: false,
    }),
    mutations: {
        setInherit(state, payload) {
            state.inherit = payload;
        },
    },
    actions: {
    }
}
