import TwoGisMap from "../TwoGisMap";

export default class PickupMap extends TwoGisMap {
    private readonly classMapPickupPointLabelPopup: string;

    constructor(containerId: string, classMapPickupPointLabelPopup: string) {
        super(containerId);
        this.classMapPickupPointLabelPopup = classMapPickupPointLabelPopup;
    }

    setPickupPoints(
        pointsArray: Array<Array<number>>,
        handleClickPickupPoint: (e) => any
    ) {
        for (const point of pointsArray) {
            const marker = this.addMarkerToMap(point);
            marker.bindLabel("скидка 10%", {
                static: true,
                className: "dg-label " + this.classMapPickupPointLabelPopup,
            });
            marker.on("click", (e) => handleClickPickupPoint(e));
        }
    }
}
