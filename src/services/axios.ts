import AxiosInstance from "../classes/http/AxiosInstance";
import auth from "./auth";

const iAxiosInstance = new AxiosInstance(auth.iClientAuth);

export default {
    iAxiosInstance: iAxiosInstance,
}