import React from "react";
import { Route, Routes } from "react-router-dom";
import RoutePath from "../../classes/navigation/RoutePath";
import ProfileAddressNavigation from "./ProfileAddressNavigation";
import ProfileScreen from "../screens/ProfileScreen";
import ProfileNavigationScreen from "../screens/ProfileNavigationScreen";
import ProfilePersonalScreen from "../screens/ProfilePersonalScreen";
import PreferencesScreen from "../screens/ProfilePreferencesScreen";
import OrdersProfileNavigation from "./OrdersProfileNavigation";
import ProfilePromoScreen from "../screens/ProfilePromoScreen";

const ProfileNavigation = () => {
    return (
        <ProfileScreen>
            <Routes>
                <Route
                    path={RoutePath.getProfileNavigationPath()}
                    element={<ProfileNavigationScreen />}
                />
                <Route
                    path={RoutePath.getProfilePersonalInfoPath()}
                    element={<ProfilePersonalScreen/>}
                />
                <Route
                    path={`${RoutePath.getAddressProfilePath()}*`}
                    element={<ProfileAddressNavigation />}
                />
                <Route
                    path={`${RoutePath.getPreferencesProfilePath()}`}
                    element={<PreferencesScreen/>}
                />
                <Route
                    path={`${RoutePath.getOrdersProfilePath()}*`}
                    element={<OrdersProfileNavigation/>}
                />
                <Route
                    path={RoutePath.getProfilePromoPath()}
                    element={<ProfilePromoScreen/>}
                />
            </Routes>
        </ProfileScreen>
    );
};

export default ProfileNavigation;
