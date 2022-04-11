import React from "react";
import { Routes, Route } from "react-router-dom";
import MapScreen from "../screens/MapScreen";
import DeliveryMapScreen from "../screens/DeliveryMapScreen";
import PickupMapScreen from "../screens/PickupMapScreen";

const MapNavigation = ({
    deliveryPath,
    pickupPath,
    absoluteDeliveryPath,
    absolutePickupPath,
    back,
}) => {
    return (
        <MapScreen
            absolutePickupPath={absolutePickupPath}
            absoluteDeliveryPath={absoluteDeliveryPath}
            back={back}
        >
            <Routes>
                <Route path={deliveryPath} element={<DeliveryMapScreen />} />
                <Route path={pickupPath} element={<PickupMapScreen />} />
            </Routes>
        </MapScreen>
    );
};

export default MapNavigation;
