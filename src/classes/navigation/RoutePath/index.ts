import RouteParams from "../RouteParams";
import { UrlParameters } from "../UrlParameters";
import urlParameters from "../../../constants/urlParameters";

export default class RoutePath {
    static getRootPath() {
        return "/";
    }

    static getSendCodePath(absolute: boolean = false) {
        const name = "send-code/";
        if (absolute)
            return this.getUrlWithModalWindowParam(
                `${this.getRootPath()}${name}`
            );
        return name;
    }

    static getCodeVerifyPath(absolute: boolean = false) {
        const name = "code-verify/";
        if (absolute)
            return this.getUrlWithModalWindowParam(
                `${this.getRootPath()}${name}`
            );
        return name;
    }

    static getMapPath(absolute: boolean = false) {
        const name = "map/";
        if (absolute) return `${this.getRootPath()}${name}`;
        return name;
    }

    static getDeliveryMapPath(absolute: boolean = false) {
        const name = "delivery-map/";
        if (absolute)
            return this.getUrlWithModalWindowParam(
                `${this.getMapPath(true)}${name}`
            );
        return name;
    }

    static getPickupMapPath(absolute: boolean = false) {
        const name = "pickup-map/";
        if (absolute)
            return this.getUrlWithModalWindowParam(
                `${this.getMapPath(true)}${name}`
            );
        return name;
    }

    static getMenuPath(absolute: boolean = false) {
        const name = "menu/";
        if (absolute) return `${this.getRootPath()}${name}`;
        return name;
    }

    static getDishCategoryPath(absolute: boolean = false) {
        const name = "dish-category/";
        if (absolute) return `${this.getMenuPath(true)}${name}`;
        return name;
    }

    static getDishCategoryMapPath(absolute: boolean = false) {
        const name = "map/";
        if (absolute) return `${this.getDishCategoryPath(true)}${name}`;
        return name;
    }

    static getDishCategoryDeliveryMapPath(absolute: boolean = false) {
        const name = "delivery-map/";
        if (absolute)
            return this.getUrlWithModalWindowParam(
                `${this.getDishCategoryMapPath(true)}${name}`
            );
        return name;
    }

    static getDishCategoryPickupMapPath(absolute: boolean = false) {
        const name = "pickup-map/";
        if (absolute)
            return this.getUrlWithModalWindowParam(
                `${this.getDishCategoryMapPath(true)}${name}`
            );
        return name;
    }

    static getDishCategoryStoryPath(
        absolute: boolean = false,
        storyId = `:${RouteParams.getStoryId()}`
    ) {
        const name = `story/${storyId}/`;
        if (absolute)
            return this.getUrlWithModalWindowParam(
                `${this.getDishCategoryPath(true)}${name}`
            );
        return name;
    }

    static getDishCategoryDishPath(
        absolute: boolean = false,
        dishId = `:${RouteParams.getDishId()}`
    ) {
        const name = `dish/${dishId}/`;
        if (absolute)
            return this.getUrlWithModalWindowParam(
                `${this.getDishCategoryPath(true)}${name}`
            );
        return name;
    }

    static getDishesPath(
        absolute: boolean = false,
        dishId = `:${RouteParams.getDishCategoryId()}`
    ) {
        const name = `dishes/${dishId}/`;
        if (absolute) return `${this.getMenuPath(true)}${name}`;
        return name;
    }

    static getDishDishesPath(
        absolute: boolean = false,
        dishId = `:${RouteParams.getDishId()}`,
        categoryId = null
    ) {
        const name = `dish/${dishId}/`;
        if (absolute)
            return this.getUrlWithModalWindowParam(
                `${this.getDishesPath(true, categoryId)}${name}`
            );
        return name;
    }

    static getBasketPath(absolute: boolean = false) {
        const name = `basket/`;
        if (absolute) return `${this.getRootPath()}${name}`;
        return name;
    }

    static getBasketPromoPath(absolute: boolean = false) {
        const name = "promo-code/"
        if (absolute) return `${this.getBasketPath(true)}${name}`
        return name
    }

    static getBasketSelectAddressPath(absolute: boolean = false) {
        const name = `select-address/`;
        if (absolute)
            return this.getUrlWithModalWindowParam(
                `${this.getBasketPath(true)}${name}`
            );
        return name;
    }

    static getBasketCreateAddressPath(absolute: boolean = false) {
        const name = `create-address/`;
        if (absolute)
            return this.getUrlWithModalWindowParam(
                `${this.getBasketPath(true)}${name}`
            );
        return name;
    }

    static getBasketSelectPaymentPath(absolute: boolean = false) {
        const name = "select-payment";
        if (absolute)
            return this.getUrlWithModalWindowParam(
                `${this.getBasketPath(true)}${name}`
            );
        return name;
    }

    static getBasketSelectDeliveryTimePath(absolute: boolean = false) {
        const name = "select-delivery-time";
        if (absolute)
            return this.getUrlWithModalWindowParam(
                `${this.getBasketPath(true)}${name}`
            );
        return name;
    }

    static getProfilePath(absolute: boolean = false) {
        const name = "profile/";
        if (absolute) return `${this.getRootPath()}${name}`;
        return name;
    }

    static getProfileNavigationPath(absolute: boolean = false) {
        const name = "navigation/";
        if (absolute) return `${this.getProfilePath(true)}${name}`;
        return name;
    }

    static getProfilePersonalInfoPath(absolute: boolean = false) {
        const name = "personal-info/"
        if (absolute) return `${this.getProfilePath(true)}${name}`
        return name
    }

    static getAddressProfilePath(absolute: boolean = false) {
        const name = "address/";
        if (absolute) return `${this.getProfilePath(true)}${name}`;
        return name;
    }

    static getAddressProfileAddressFormPath(absolute: boolean = false) {
        const name = "address-form/";
        if (absolute)
            return this.getUrlWithModalWindowParam(
                `${this.getAddressProfilePath(true)}${name}`
            );
        return name;
    }

    static getPreferencesProfilePath(absolute: boolean = false) {
        const name = "preferences/";
        if (absolute) return `${this.getProfilePath(true)}${name}`;
        return name;
    }

    static getOrdersProfilePath (absolute: boolean = false) {
        const name = "orders/"
        if (absolute) return `${this.getProfilePath(true)}${name}`
        return name
    }

    static getOrderProfilePath (absolute: boolean = false, oderId = `:${RouteParams.getOrderId()}`) {
        const name = `order/${oderId}/`
        if (absolute) return this.getUrlWithModalWindowParam(`${this.getOrdersProfilePath(true)}${name}`)
        return name
    }

    static getProfilePromoPath (absolute: boolean = false) {
        const name = "promo-code/"
        if (absolute) return `${this.getProfilePath(true)}${name}`
        return name
    }

    //use when url leads to modal screen path
    private static getUrlWithModalWindowParam(url) {
        return UrlParameters.addSearchParam(
            url,
            urlParameters.modalScreen.name,
            "true"
        );
    }
}
