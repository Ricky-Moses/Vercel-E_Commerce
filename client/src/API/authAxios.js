import axios from "axios";

const authAPI = axios.create({
    baseURL: import.meta.env.API_URL_AUTH,
    withCredentials: true
})

export default authAPI