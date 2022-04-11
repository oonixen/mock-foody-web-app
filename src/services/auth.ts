import AccessToken from "../classes/auth/AccessToken";
import RefreshToken from "../classes/auth/RefreshToken";
import ClientAuth from "../classes/auth/ClientAuth";

const iAccessToken = new AccessToken();
const iRefreshToken = new RefreshToken();
const iClientAuth = ClientAuth.getInstance(iAccessToken, iRefreshToken);

export default {
    iAccessToken: iAccessToken,
    iRefreshToken: iRefreshToken,
    iClientAuth: iClientAuth,
};
