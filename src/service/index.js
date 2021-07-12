import axios from 'axios'

export default {
    login(accountLogin) {
        return axios.post('https://line-sender.herokuapp.com/login', accountLogin)
                .then(function(response){
                    return response
                });
    },
    getAllUsers() {
        return axios.get('https://line-sender.herokuapp.com/line-accounts')
                .then(function(response){
                    return response
                });
    },
    sendMessage(req) {
        return axios.post('https://line-sender.herokuapp.com/line-messages', req)
                .then(function(response){
                    console.log(req)
                    return response
                })
    }
}
