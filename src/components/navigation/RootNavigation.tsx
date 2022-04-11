import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutePath from "../../classes/navigation/RoutePath";
import MainPageBeforeAuthorizationNavigation from "./MainPageBeforeAuthorizationNavigation";
import MenuNavigation from "./MenuNavigation";
import BottomBasketButton from "../modules/RootNavigation/BottomBasketButton";
import ScrollToTop from "../modules/RootNavigation/ScrollToTop";
import BasketNavigation from "./BasketNavigation";
import ProfileNavigation from "./ProfileNavigation";

const RootNavigation = () => (
    <BrowserRouter>
        <ScrollToTop>
            <Routes>
                <Route
                    path={`${RoutePath.getRootPath()}*`}
                    element={<MainPageBeforeAuthorizationNavigation />}
                />
                <Route
                    path={`${RoutePath.getMenuPath()}*`}
                    element={<MenuNavigation />}
                />
                <Route
                    path={`${RoutePath.getBasketPath()}*`}
                    element={<BasketNavigation />}
                />
                <Route
                    path={`${RoutePath.getProfilePath()}*`}
                    element={<ProfileNavigation />}
                />
            </Routes>
            <BottomBasketButton />
        </ScrollToTop>
    </BrowserRouter>
);

export default RootNavigation;
