import { useLocation } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import urlParameters from "../../../../constants/urlParameters";
import { ILocationHandlerInfo } from "./interface";
import { UrlParameters } from "../../../../classes/navigation/UrlParameters";

export function useScrollToTopHandler() {
    const location = useLocation();
    const pathname = location.pathname;
    const [locationObj, setLocation] = useState<ILocationHandlerInfo>({
        currentLocation: pathname,
        prevLocation: null,
        lastNotModalScreen: null,
    });
    const isModal = UrlParameters.hasUrlParameter(
        window.location.search,
        urlParameters.modalScreen.name
    );

    useLayoutEffect(() => {
        let lastNotModalScreen = locationObj.lastNotModalScreen;
        let isLastNotModalScreen = pathname === lastNotModalScreen;

        // prevent scroll to top, when location changes if modal window
        if (!isModal && !isLastNotModalScreen) {
            lastNotModalScreen = pathname;
            window.scrollTo(0, 0);
        }

        setLocation({
            currentLocation: pathname,
            prevLocation: locationObj.currentLocation,
            lastNotModalScreen: lastNotModalScreen,
        });
    }, [location.pathname]);
}
