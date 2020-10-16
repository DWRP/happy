import axios from 'axios'

const api = axios.create({
    baseURL: "<URL_BACKEND_HERE>"
})

export default api