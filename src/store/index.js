import Vue from 'vue'
import Vuex from 'vuex'
import auth from '../service/index' 
import router from '../router/routes'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userInfo: {
            email: '',
        },
        users: [],
        isLoading: false,
        // isSuccess: false
    },
    mutations: {
        get_email(state, data) {
            state.userInfo.email = data
        },
        get_all_users(state, data) {
            state.users = data
        },
        change_isLoading(state) {
            state.isLoading = !state.isLoading
        }
    },
    actions: {
        async login({commit}, accountLogin) {
            try {
                commit('change_isLoading')
                var jsonRes = await auth.login(accountLogin)
                commit('get_email', jsonRes.data.email)
                localStorage.setItem('token', jsonRes.data.token)
                commit('change_isLoading')
                router.push('/chat')
            } catch (error) {
                console.log(error)
                alert('Incorrect account. Try again.')
            }
        },
        async getAllUsers({commit}) {
            try {
                var jsonRes = await auth.getAllUsers()
                commit('get_all_users', jsonRes.data)
            } catch (error) {
                console.log(error)
            }
        },
        async sendMessage({commit},req) {
            try {
                var jsonRes = await auth.sendMessage(req)
                console.log(jsonRes.data)
                commit('get_email', 'dactechgoteam@gmail.com')
            } catch (error) {
                console.log(error)
            }
        }
    }
})

export default store