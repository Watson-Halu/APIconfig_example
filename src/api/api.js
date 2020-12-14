import axios from 'axios'

const userRequest = axios.create({
    baseURL: 'https://randomuser.me/api/'
})

// USER
// GET
export const apiUserInfo = () => userRequest.get('/')
//POST
export const apiUserLogin = data => userRequest.post('/signIn', data);

