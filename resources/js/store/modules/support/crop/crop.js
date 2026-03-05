export default {
    namespaced: true,
    state: () => ({
        remove_image: false,
    }),

    mutations: {
        setRemove(state, payload) {
            state.remove_image = payload;
        },
    },
    actions: {
    }
}
