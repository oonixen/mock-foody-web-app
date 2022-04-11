export class UrlParameters {
    static addSearchParam(url: string, name: string, value: string) {
        const searchObj = url.match(/\?[^]*/);
        let concatSign = "?";

        if (searchObj) concatSign = "&";

        return `${url}${concatSign}${name}=${value}`;
    }

    static hasUrlParameter(url: string, parameterName: string) {
        return new URLSearchParams(url).get(parameterName);
    }
}
