import auth from "./auth";
import RequestHandler from "../classes/http/RequestHandler";
import api from "./api";

const iRequestHandler = new RequestHandler(
    (refreshToken) => api.iAuthApi.authRefreshToken({ refresh: refreshToken }),
    auth.iClientAuth
);

export default {
    iRequestHandler: iRequestHandler,
};
