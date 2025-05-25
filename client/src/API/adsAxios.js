import axios from "axios";

const adsAPI = axios.create({
    baseURL: import.meta.env.VITE_API_URL_ADS,
    withCredentials: true
})
console.log('adsAPI baseURL:', adsAPI.defaults.baseURL);

export default adsAPI