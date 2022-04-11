import React, { useEffect, useState } from "react";
import DeliveryMap from "../../../../../classes/map/DeliveryMap";
import PickupMap from "../../../../../classes/map/PickupMap";

export function useSetMapMarker(mapID, classMapPickupPointLabelPopup: string) {
    const [markerLatLngArray, setMarkerLatLngArray] = useState(null);

    useEffect(() => {
        // initDeliveryMap(setMarkerLatLngArray, mapID, markerLatLngArray)
        initPickupMap(mapID, classMapPickupPointLabelPopup);
    }, []);

    return markerLatLngArray;
}

async function initDeliveryMap(setMarkerLatLngArray, mapID, markerLatLngArray) {
    const handleChangeMarker = (latLngArray) =>
        setMarkerLatLngArray(latLngArray);
    const iMap = new DeliveryMap(mapID, markerLatLngArray);

    await iMap.initMap();

    if (markerLatLngArray)
        iMap.addMarkerToDeliveryMap(markerLatLngArray, handleChangeMarker);

    iMap.map.on("click", (e) => {
        const latLng = e.latlng;
        iMap.addMarkerToDeliveryMap(
            [latLng.lat, latLng.lng],
            handleChangeMarker
        );
    });
}

async function initPickupMap(mapID, classMapPickupPointLabelPopup) {
    const iMap = new PickupMap(mapID, classMapPickupPointLabelPopup);

    await iMap.initMap();

    iMap.setPickupPoints(
        [
            [53.2, 50.14],
            [53.21, 50.141],
            [53.19, 50.14],
        ],
        (e) => console.log(e)
    );
}
