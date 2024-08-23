import axiosInstance from "./axiosInstance";

export const login = async (credentials: { email: string, password: string }) => {
    return await axiosInstance.post('/user/login', credentials);
};