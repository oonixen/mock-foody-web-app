import React from "react";
import { Routes, Route } from "react-router-dom";
import RoutePath from "../../classes/navigation/RoutePath";
import CreateAddressWindowScreen from "../screens/CreateAddressWindowScreen";
import ProfileAddressScreen from "../screens/ProfileAddressScreen";

const ProfileAddressNavigation = () => {
    return (
        <>
            <ProfileAddressScreen />
            <Routes>
                <Route
                    path={RoutePath.getAddressProfileAddressFormPath()}
                    element={
                        <CreateAddressWindowScreen
                            backUrl={RoutePath.getAddressProfilePath(true)}
                        />
                    }
                />
            </Routes>
        </>
    );
};

export default ProfileAddressNavigation;
