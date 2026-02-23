export default {
    namespaced: true,
    state: () => ({
        countries: [],
    }),

    mutations: {
        setCountry(state, payload) {
            state.countries = payload;
        },
    },
    actions: {
        getCountry({
            commit
        }, options = {}) {
            const {
                transfer
            } = options;

            const data = axios.get("/support/countries").then((res) => {
                commit('setCountry', res.data);
            }).catch((e) => {
                console.log(e);
            })
        }
    }
}
