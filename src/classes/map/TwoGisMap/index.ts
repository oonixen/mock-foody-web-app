import FrontDomainName from "../../../constants/frontDomainName";

export default abstract class TwoGisMap {
    private readonly containerId: string;
    private readonly defaultLatLngArray: Array<number> = [53.2, 50.14];
    protected currentMapFocus = this.defaultLatLngArray;
    public map: any = null;
    private marker: any = null;

    protected constructor(containerId: string) {
        this.containerId = containerId;
    }

    initMap() {
        return new Promise((resolve) => {
            // @ts-ignore
            DG.then(() => {
                // @ts-ignore
                this.map = DG.map(this.containerId, {
                    center: this.currentMapFocus,
                    zoom: 12,
                    fullscreenControl: false,
                });

                resolve("initMap resolved");
            });
        });
    }

    protected addMarkerToMap(latLngArray) {
        // @ts-ignore
        this.marker = DG.marker(latLngArray, {
            // @ts-ignore
            icon: DG.icon({
                iconUrl: `${FrontDomainName}/images/pickTag.svg`,
                iconSize: [30, 70],
                iconAnchor: [15, 55],
            }),
        });
        this.marker.addTo(this.map);
        this.map.panTo(latLngArray);

        return this.marker;
    }

    protected deletePoint() {
        if (this.marker) this.marker.removeFrom(this.map);
    }
}
