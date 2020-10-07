import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        add(state, step) {
            // 不要在 mutation 函数中，执行异步操作
            state.count += step
        },
        sub(state) {
            state.count--
        },
        subN(state, step) {
            state.count -= step
        }
    },
    actions: {
        addAsync(context) {
            setTimeout(() => {
               context.commit('add') 
            }, timeout);
        }
    },
    modules: {
    }
})
