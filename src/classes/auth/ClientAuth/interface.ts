import { AuthToken } from "../../../api";

export interface IClientAuth {
    init(
        updateToken: (
            refreshToken: string,
            successCallback: (authToken: AuthToken) => void
        ) => void
    );
    setToken(authToken: AuthToken);
    getAccessToken(): string | null;
    getRefreshToken(): string | undefined;
}
