import React from "react";
import { Route, Routes } from "react-router-dom";
import RoutePath from "../../classes/navigation/RoutePath";
import BasketPromoScreen from "../screens/BasketPromoScreen";
import BasketScreen from "../screens/BasketScreen";
import ChooseAddressWindowScreen from "../screens/ChooseAddressWindowScreen";
import CreateAddressWindowScreen from "../screens/CreateAddressWindowScreen";
import ChoosePaymentScreen from "../screens/ChoosePaymentScreen";
import ChooseDeliveryTimeScreen from "../screens/ChooseDeliveryTimeScreen";

const BasketNavigation = () => {

    return (
        <>
            <BasketScreen />
            <Routes>
                <Route
                    path={RoutePath.getBasketSelectAddressPath()}
                    element={<ChooseAddressWindowScreen />}
                />
                <Route
                    path={RoutePath.getBasketPromoPath()}
                    element={<BasketPromoScreen/>}
                />
                <Route
                    path={RoutePath.getBasketCreateAddressPath()}
                    element={
                        <CreateAddressWindowScreen
                            backUrl={RoutePath.getBasketSelectAddressPath(true)}
                        />
                    }
                />
                <Route
                    path={RoutePath.getBasketSelectPaymentPath()}
                    element={<ChoosePaymentScreen />}
                />
                <Route
                    path={RoutePath.getBasketSelectDeliveryTimePath()}
                    element={<ChooseDeliveryTimeScreen />}
                />
            </Routes>
        </>
    );
};

export default BasketNavigation;
