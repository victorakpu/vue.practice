import vue from 'vue'
import vuex from 'vuex'


vue.use(vuex)

export default new vuex.Store({
    state: {
        count: 23,
    },
    mutations: {
        increment(state, num) {
            state.count += num;
        },
    },
    actions: {
        asyncIncrement({commit},asyncNorm) {
            setTimeout(() => {
                commit('increment', asyncNorm)
            }, 3000);
        }},
    getters: {
        doubleCount(state) {
            return state.count * 2;
        },
    }
})