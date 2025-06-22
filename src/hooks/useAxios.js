import { useEffect } from "react";
import { api } from "../api/api";
import useAuth from "./useAuth";
import axios from "axios";
import { Axios } from "axios";

export const useAxios = () => {
    const { auth, setAuth } = useAuth();
    useEffect(() => {
        // request intercepter
        const reqIntercept = api.interceptors.request.use(
            (config) => {
                const authToken = auth?.authToken;
                if (authToken) {
                    config.headers.Authorization = `Bearer ${authToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        // response intercepter
        const resIntercept = api.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error.config;
                if (error.response.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;

                    try {
                        const refreshToken = auth?.refreshToken;

                        const response = await axios.post(
                            `${
                                import.meta.env.VITE_SERVER_BASE_URL
                            }/auth/refresh-token`,
                            {
                                refreshToken,
                            }
                        );
                        const { token } = response.data;

                        setAuth({ ...auth, authToken: token });

                        originalRequest.headers.Authorization = `Bearer ${token}`;

                        return axios(originalRequest);
                    } catch (err) {
                        throw error;
                    }
                }
                return Promise.reject(error);
            }
        );

        return () => {
            api.interceptors.request.eject(reqIntercept);
            api.interceptors.response.eject(resIntercept);
        };
    }, [auth.authToken]);

    return api;
};
