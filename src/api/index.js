import axios from 'axios'

const api = axios.create({
    baseURL: 'https://cookit-back.herokuapp.com/'
})

export default api