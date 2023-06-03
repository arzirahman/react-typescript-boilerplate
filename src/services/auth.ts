import { createAxios } from "./axios-instance";
import { setAccessToken } from "../redux/dispatch";
import { LOGIN_URL, TOKEN_URL, LOGOUT_URL } from "./constants";
import { AxiosResponse } from "axios";
import { ResponseType } from "./constants";

export const login = async ({ 
    username, password 
}: { 
    username: string; password: string 
}) => {
    try {
        const response: AxiosResponse<ResponseType> = await createAxios().post(
            LOGIN_URL, { username, password }
        );
        setAccessToken(response?.data?.message);
        return response;
    } catch (error: any) {
        throw error;
    }
}

export const logout = async () => {
    try {
        const response: AxiosResponse<ResponseType> = await createAxios().delete(
            LOGOUT_URL
        );
        return response;
    } catch (error: any) {
        throw error;
    }
}

export const getToken = async () => {
    try {
        const response: AxiosResponse<ResponseType> = await createAxios().get(TOKEN_URL);
        setAccessToken(response?.data?.message);
        return response;
    } catch (error: any) {
        throw error;
    }
}