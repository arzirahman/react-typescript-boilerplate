import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_URL } from "./constants";
import { store } from "../redux/store";
import { ResponseType } from "./constants";
import { getToken } from "./auth";
import { loading } from "../redux/dispatch";

export const createAxios = () => {
    const accessToken = store.getState().app.accessToken;
    const axiosInstance = axios.create({
        baseURL: BASE_URL,
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${accessToken || ''}`
        }
    });
    axiosInstance.interceptors.request.use(
        function (config) {
            loading(true);
            return Promise.resolve(config);
        },
        function (error) {
            loading(false);
            return Promise.reject(error);
        },
    );    
    axiosInstance.interceptors.response.use(
        (response) => { 
            loading(false);
            return Promise.resolve(response) 
        },
        async (error) => {
            loading(false);
            const err = error as AxiosError<ResponseType>;
            const originalRequest = err.config as AxiosRequestConfig<any> & { _retry: boolean };
            if(err.response?.data?.code === 403 && !originalRequest?._retry){
                originalRequest._retry = true;
                return getToken()
                    .then((response: AxiosResponse<ResponseType>) => {
                        const token = response?.data?.message;
                        axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`;
                        if(originalRequest.headers) {
                            originalRequest.headers['Authorization'] = `Bearer ${token}`;
                        }
                        return axiosInstance(originalRequest)
                    })
                    .catch((error) => {
                        return Promise.reject(error);
                    })
            }
            return Promise.reject(error);
        }
    )
    return axiosInstance;
}