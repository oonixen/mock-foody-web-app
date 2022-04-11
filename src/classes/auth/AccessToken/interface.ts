export interface IAccessToken {
    get(): string | null;
    set(token: string);
}
