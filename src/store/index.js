import Vuex from 'vuex'
import user from './modules/user'
import auth from './modules/auth'

export default new Vuex.Store({
    modules: {
        user,
        auth
    }
})