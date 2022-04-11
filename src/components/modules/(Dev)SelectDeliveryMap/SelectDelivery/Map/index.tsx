import React from "react";
import { useSetMapMarker } from "./model";
import styles from "./style.module.scss";

export const Map = () => {
    const mapID = "deliveryMap";
    // @ts-ignore
    const deliveryPointLatLngArray = useSetMapMarker(
        mapID,
        styles.pickupPointLabelPopup
    );

    return (
        <>
            <div id={mapID} style={{ width: "100vw", height: "100vh" }} />
        </>
    );
};
