import { AxiosResponse } from "axios";
import { AuthToken } from "../../../api";
import { IClientAuth } from "../../auth/ClientAuth/interface";
import AppErrors from "../../../constants/appErrors";

export default class RequestHandler {
    private readonly updateToken: (
        refreshToken: string
    ) => Promise<AxiosResponse<AuthToken, any>>;
    private readonly iClientAuth: IClientAuth;

    constructor(
        updateToken: (
            refreshToken: string
        ) => Promise<AxiosResponse<AuthToken, any>>,
        iClientAuth: IClientAuth
    ) {
        this.updateToken = updateToken;
        this.iClientAuth = iClientAuth;
    }

    handle<Res>(
        request: () => Promise<AxiosResponse<Res, any>>,
        successCallback?: (response: AxiosResponse<Res, any>) => any,
        errorCallback?: (error: Error) => any
    ) {
        request()
            .then(async (response) => {
                switch (response.status) {
                    case 200:
                        if (successCallback) successCallback(response);
                        break;
                    case 401:
                        await this.handleUnauthorized(
                            request,
                            successCallback,
                            errorCallback
                        );
                        break;
                    default:
                        throw new Error(
                            `Unregistered status ${response.status}`
                        );
                }
            })
            .catch(() => {
                if (errorCallback)
                    errorCallback(new Error(AppErrors.networkError));
            });
    }

    private async handleUnauthorized(
        request,
        successCallback,
        errorCallback: (error: Error) => any
    ) {
        const refreshToken = this.iClientAuth.getRefreshToken();

        if (!refreshToken) {
            errorCallback(new Error(AppErrors.authorizationError))
            return
        }

        const responseRefreshToken = await this.updateToken(refreshToken);

        if (responseRefreshToken.status !== 200) {
            errorCallback(new Error(AppErrors.authorizationError));
            return;
        }

        this.iClientAuth.setToken({ ...responseRefreshToken.data });
        this.handle(request, successCallback, errorCallback);
    }
}
