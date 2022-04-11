import { AuthToken } from "../../../api";
import { IAccessToken } from "../AccessToken/interface";
import { IRefreshToken } from "../RefreshToken/interface";
import { IClientAuth } from "./interface";

export default class ClientAuth implements IClientAuth {
    private static instance: ClientAuth;
    private accessToken: string | null = null;
    private refreshToken: string | undefined = undefined;
    private readonly iAccessToken: IAccessToken;
    private readonly iRefreshToken: IRefreshToken;

    private constructor(
        iAccessToken: IAccessToken,
        iRefreshToken: IRefreshToken
    ) {
        this.iAccessToken = iAccessToken;
        this.iRefreshToken = iRefreshToken;
    }

    public static getInstance(
        iAccessToken: IAccessToken,
        iRefreshToken: IRefreshToken
    ): ClientAuth {
        if (!ClientAuth.instance) {
            ClientAuth.instance = new ClientAuth(iAccessToken, iRefreshToken);
        }

        return ClientAuth.instance;
    }

    init(
        updateToken: (
            refreshToken: string,
            successCallback: (authToken: AuthToken) => void
        ) => void
    ) {
        this.accessToken = this.iAccessToken.get();
        this.refreshToken = this.iRefreshToken.get();

        if (this.accessToken && this.refreshToken) {
            this.setToken({
                access: this.accessToken,
                refresh: this.refreshToken,
            });
        } else if (this.refreshToken) {
            updateToken(this.refreshToken, (authToken) =>
                this.setToken(authToken)
            );
        }
    }

    setToken(authToken: AuthToken): void {
        this.iAccessToken.set(authToken.access);
        this.accessToken = authToken.access;

        this.iRefreshToken.set(authToken.refresh);
        this.refreshToken = authToken.refresh;
    }

    getAccessToken(): string | null {
        return this.accessToken;
    }

    getRefreshToken(): string | undefined {
        return this.refreshToken;
    }
}
