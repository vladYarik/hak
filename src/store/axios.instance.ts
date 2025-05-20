import axios from "axios";
import { API_ROUTE } from "../assets/urls/urls";

const axiosInstance = axios.create({
    baseURL:API_ROUTE,
    headers:{
        'Content-Type':"application/json"
    }
})


axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    
        config.headers.Authorization = `Bearer ${token}`
    
    return config
})

export default axiosInstance