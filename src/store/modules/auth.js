const auth = {
    state: window.sessionStorage.getItem("auth-state") != null ? JSON.parse(window.sessionStorage.getItem("auth-state")) : {
        tokenString: ""
    },
    getters: {
        getTokenString(state) {
            return state.tokenString
        }
    },
    mutations: {
        updateToken(state, tokenString) {
            state.tokenString = tokenString
        }
    },
    actions: {
        //更新token值
        asyncUpdateToken(context, tokenString) {
            context.commit("updateToken", tokenString)
        }
    }
}

export default auth
