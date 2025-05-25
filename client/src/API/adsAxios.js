import axios from "axios";

const adsAPI = axios.create({
    baseURL: import.meta.env.API_URL_ADS,
    withCredentials: true
})
console.log('adsAPI baseURL:', adsAPI.defaults.baseURL);

export default adsAPI