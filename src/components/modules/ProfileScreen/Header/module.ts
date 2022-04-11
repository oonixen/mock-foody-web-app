import { useLocation } from "react-router-dom";
import RoutePath from "../../../../classes/navigation/RoutePath";
import { useScreenWidth } from "../../../../hooks/screenWidth";
import screenWidth from "../../../../constants/screenWidth";

export function useReceiveBackButtonPath(): string {
    const location = useLocation();
    const pathname = location.pathname;
    const { width } = useScreenWidth();
    const backPath = RoutePath.getDishCategoryPath(true);
    const profileNavigationPath = RoutePath.getProfileNavigationPath(true);

    if (width > screenWidth.tablet) return backPath;
    else if (pathname === profileNavigationPath) return backPath;
    else return profileNavigationPath;
}
