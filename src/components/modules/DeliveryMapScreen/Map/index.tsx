import React from "react";
import styles from "./style.module.scss";
import LocationButton from "../../../generics/LocationButton";

const Map = () => {
    return (
        <div className={styles.DeliveryMapScreen_Map__block}>
            <div className={styles.DeliveryMapScreen_Map__mapBlock} />
            <LocationButton className={styles.DeliveryMapScreen_Map__button} />
        </div>
    );
};

export default Map;
