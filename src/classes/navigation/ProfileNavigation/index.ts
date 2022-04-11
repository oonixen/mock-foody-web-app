import screenWidth from "../../../constants/screenWidth";
import RoutePath from "../RoutePath";

export class ProfileNavigation {
    static getProfilePath() {
        const width = window.screen.width;
        if (width > screenWidth.tablet)
            return RoutePath.getAddressProfilePath(true);
        return RoutePath.getProfileNavigationPath(true);
    }
}
