import LoginForm from '../view/LoginForm'
import Chat from '../view/Chat'
import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '',
        name: 'login',
        component: LoginForm
    },
    { 
        path: '/chat', 
        name: 'chat', 
        component: Chat
    }
]
export default new VueRouter({
    routes
})