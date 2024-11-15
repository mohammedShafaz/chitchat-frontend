import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_PATH || 'http://localhost:5001/api/v1',
 
});

export default axiosInstance;