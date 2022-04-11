import { IAccessToken } from "./interface";

export default class AccessToken implements IAccessToken {
    private readonly name: string = "userSession";

    get(): string | null {
        return sessionStorage.getItem(this.name);
    }

    set(token: string) {
        sessionStorage.setItem(this.name, token);
    }
}
