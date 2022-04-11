import React from "react";
import {useNavigate} from "react-router-dom";
import BackgroundBlackout from "../../generics/BackgroundBlackout";
import styles from "./style.module.scss";
import DeliverySwitcher from "../../modules/MapScreen/DeliverySwitcher";

const MapScreen = ({
    children,
    absoluteDeliveryPath,
    absolutePickupPath,
    back,
}) => {

    const navigation = useNavigate();

    return (
        <BackgroundBlackout onClick={() => navigation(back)}>
            <section className={styles.MapScreen__section}>
                <DeliverySwitcher
                    absolutePickupPath={absolutePickupPath}
                    absoluteDeliveryPath={absoluteDeliveryPath}
                />
                {children}
            </section>
        </BackgroundBlackout>
    )
}

export default MapScreen