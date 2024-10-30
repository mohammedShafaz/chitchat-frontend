import axiosInstance from "./axiosInstance";

export const findUser=async(credentials:{email: string})=>{
    return await axiosInstance.get('/user/find', {params:credentials});
}