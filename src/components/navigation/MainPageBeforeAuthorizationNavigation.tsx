import React from "react";
import { Routes, Route } from "react-router-dom";
import RoutePath from "../../classes/navigation/RoutePath";
import SendCode from "../screens/SendCodeScreen";
import CodeVerify from "../screens/CodeVerifyScreen";
import MapNavigation from "./MapNavigation";
import MainPageBeforeAuthorizationScreen from "../screens/MainPageBeforeAuthorizationScreen";

const MainPageBeforeAuthorizationNavigation = () => {
    return (
        <>
            <MainPageBeforeAuthorizationScreen />
            <Routes>
                <Route
                    path={RoutePath.getSendCodePath()}
                    element={<SendCode />}
                />
                <Route
                    path={RoutePath.getCodeVerifyPath()}
                    element={<CodeVerify />}
                />
                <Route
                    path={`${RoutePath.getMapPath()}*`}
                    element={
                        <MapNavigation
                            deliveryPath={RoutePath.getDeliveryMapPath()}
                            pickupPath={RoutePath.getPickupMapPath()}
                            absoluteDeliveryPath={RoutePath.getDeliveryMapPath(
                                true
                            )}
                            absolutePickupPath={RoutePath.getPickupMapPath(
                                true
                            )}
                            back={RoutePath.getRootPath()}
                        />
                    }
                />
            </Routes>
        </>
    );
};

export default MainPageBeforeAuthorizationNavigation;
