import React from "react";
import OrdersProfileScreen from "../screens/OrdersProfileScreen";
import {Routes, Route} from "react-router-dom";
import RoutePath from "../../classes/navigation/RoutePath";
import OrderProfileScreen from "../screens/OrderProfileScreen";

const OrdersProfileNavigation = () => {

    return (
        <>
            <OrdersProfileScreen/>
            <Routes>
                <Route
                    path={RoutePath.getOrderProfilePath()}
                    element={<OrderProfileScreen/>}
                />
            </Routes>
        </>
    )
}

export default OrdersProfileNavigation