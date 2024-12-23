import axios from "axios";

const url: string = import.meta.env.VITE_NODE_ENV === "development" ? 'http://localhost:5000/api/v1' : import.meta.env.VITE_BASE_PATH;

const axiosInstance = axios.create({
    baseURL: url,

});

export default axiosInstance;