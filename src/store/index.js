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
        token: null,
        users: []
    },
    mutations: {
        get_email(state, data) {
            state.userInfo.email = data
        },
        get_all_users(state, data) {
            state.users = data
        }
    },
    actions: {
        async login({commit}, accountLogin) {
            try {
                var jsonRes = await auth.login(accountLogin)
                commit('get_email', jsonRes.data.email)
                localStorage.setItem('token', jsonRes.data.token)
                router.push('/chat')
            } catch (error) {
                console.log(error)
                alert('Incorrect account. Try again.')
                router.push('')
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
        async sendMessage(req) {
            try {
                var jsonRes = await auth.sendMessage(req)
                console.log('response' + jsonRes.data)
            } catch (error) {
                console.log(error)
            }
        }
    }
})

export default store