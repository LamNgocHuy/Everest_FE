import axios from 'axios'

export default {
    login(accountLogin) {
        return axios.post('https://line-sender.herokuapp.com/login', accountLogin);
    },
    getAllUsers() {
        return axios.get('https://line-sender.herokuapp.com/line-accounts')
                .then(function(response){
                    return response
                });
    }
}
