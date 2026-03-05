export default {
    namespaced: true,
    state: () => ({
        categories: [],
    }),

    mutations: {
        setCategory(state, payload) {
            state.categories = payload;
        },
    },
    actions: {
        getCategory({
            commit
        }, options = {}) {
            const {
                transfer
            } = options;

            const data = axios.get(`/category?page=1&allData=true&module_name=${transfer}`).then((res) => {
                commit('setCategory', res.data);
            }).catch((e) => {
                console.log(e);
            })
        }
    }
}
