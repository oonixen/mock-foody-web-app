import TwoGisMap from "../TwoGisMap";

export default class DeliveryMap extends TwoGisMap {
    constructor(containerId: string, startMarkerLatLngArray?) {
        super(containerId);
        if (startMarkerLatLngArray)
            this.currentMapFocus = startMarkerLatLngArray;
    }

    addMarkerToDeliveryMap(
        latLngArray,
        setMarkerHandle: (latLngArray: Array<number>) => any
    ) {
        this.deletePoint();
        this.addMarkerToMap(latLngArray);
        setMarkerHandle(latLngArray);
    }
}
