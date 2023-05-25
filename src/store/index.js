import { createStore } from "vuex";


const store = createStore({
    state() {
        return {
            user: {
                
            }
        }
    },
    getters: {
        getUser(state) {
            return state.user
        }
    },
    mutations: {
        updateUser(state, user) {
            state.user = user
        }
    },
    actions: {
        asyncUpdateUser(context, user) {
            context.commit("updateUser", user)
        }
    }
})

export default store