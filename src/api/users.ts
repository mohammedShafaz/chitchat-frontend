import { AxiosResponse } from "axios";
import axiosInstance from "./axiosInstance";

export const findUser = async (credentials: { email: string }) => {
    try {
        const response = await axiosInstance.get('/user/find', {
            params: credentials, headers: {
                'Content-Type': 'application/json'
            },
        });
        return response;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};

export const createUser = async (body: FormData): Promise<AxiosResponse> => {
    try {
        const response = await axiosInstance.post('/user/register', body, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response;
    } catch (error) {
        console.error("Error creating user :", error);
        throw error;

    }
};
export const verifyOtp = async ({email, otp}:{ email: string, otp: string }): Promise<AxiosResponse> => {
    try {
        const response = await axiosInstance.post('/user//verify-otp', { email, otp }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error verifying otp", error);
        throw error;
    }
}