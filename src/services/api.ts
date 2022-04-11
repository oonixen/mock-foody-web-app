import { AuthApi } from "../api";
import ApiBaseUrl from "../constants/apiBaseUrl";
import axios from "./axios";

const baseServerUrl = ApiBaseUrl;
const axiosInstance = axios.iAxiosInstance.get();
const iAuthApi = new AuthApi(undefined, baseServerUrl, axiosInstance);

export default {
    iAuthApi: iAuthApi,
};
