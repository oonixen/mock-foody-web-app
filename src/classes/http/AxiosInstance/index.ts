import axios, {
    AxiosInstance as AxiosInstanceInterface,
    AxiosRequestConfig,
} from "axios";
import { IClientAuth } from "../../auth/ClientAuth/interface";

export default class AxiosInstance {
    readonly axiosInstance: AxiosInstanceInterface = axios.create();

    constructor(ClientAuth: IClientAuth) {
        this.axiosInstance.interceptors.request.use(
            async (config: AxiosRequestConfig) => {
                const accessToken = ClientAuth.getAccessToken();

                if (!accessToken) return config;

                return {
                    ...config,
                    headers: {
                        ...config.headers,
                        Authorization: `Bearer ${accessToken}`,
                    },
                } as AxiosRequestConfig;
            }
        );
    }

    get(): AxiosInstanceInterface {
        return this.axiosInstance;
    }
}
