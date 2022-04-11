import Cookies from "js-cookie";
import { IRefreshToken } from "./interface";

export default class RefreshToken implements IRefreshToken {
    private readonly name: string = "userSession";

    get(): string | undefined {
        return Cookies.get(this.name);
    }

    set(token: string) {
        Cookies.set(this.name, token, {
            expires: 1,
            secure: true,
            path: "/",
            sameSite: "strict",
        });
    }
}
