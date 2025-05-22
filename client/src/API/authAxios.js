import axios from "axios";

const authAPI = axios.create({
    baseURL: import.meta.env.VITE_API_URL_AUTH || 'http://localhost:3000/api/auth',
    withCredentials: true
})

export default authAPI