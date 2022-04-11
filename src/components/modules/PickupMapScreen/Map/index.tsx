import React from "react";
import styles from "./style.module.scss";
import LocationButton from "../../../generics/LocationButton";
import Button from "../../../generics/Button";

const Map = ({ setIsShowKitchenSelector }) => {
    return (
        <div className={styles.PickupMapScreen_Map__block}>
            <div className={styles.PickupMapScreen_Map__map}>
                <Button
                    className={styles.PickupMapScreen_Map__button}
                    onClick={() => setIsShowKitchenSelector(true)}
                >
                    все точки
                </Button>
                <LocationButton
                    className={styles.PickupMapScreen_Map__locationButton}
                />
            </div>
        </div>
    );
};

export default Map;
