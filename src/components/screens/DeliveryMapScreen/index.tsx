import React from "react";
import BlockWrapper from "../../modules/DeliveryMapScreen/BlockWrapper";
import AddressSelector from "../../modules/DeliveryMapScreen/AddressSelector";
import Map from "../../modules/DeliveryMapScreen/Map";

const DeliveryMap = () => {
    return (
        <BlockWrapper>
            <AddressSelector />
            <Map />
        </BlockWrapper>
    );
};

export default DeliveryMap;
