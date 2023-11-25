import axios from "axios";

const api = axios.create({
    baseURL: 'https://the-one-api.dev/v2'
})

api.interceptors.request.use( async config => {
    const token = 'N5WzUYbAqqtnydVfjZJv'

    config.headers.authorization = `Bearer ${token}`

    return config;
})


export default api