import axios from "axios";

const adsAPI = axios.create({
    baseURL: import.meta.env.VITE_API_URL_ADS || 'http://localhost:3000/api/ads',
    withCredentials: true
})
console.log('adsAPI baseURL:', adsAPI.defaults.baseURL);

export default adsAPI