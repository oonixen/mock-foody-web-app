import React from "react";
import styles from "./style.module.scss";
import { NavLink } from "react-router-dom";
import { useAnimateDeliveryNavBlock } from "./model";

const DeliverySwitcher = ({
    absoluteDeliveryPath,
    absolutePickupPath,
}) => {
    const isDeliveryButton = useAnimateDeliveryNavBlock(
        absoluteDeliveryPath,
        absolutePickupPath
    );

    return (
        <nav className={styles.MapScreen_DeliverySwitcher__nav}>
            <li className={styles.MapScreen_DeliverySwitcher__li}>
                <div
                    className={
                        `${styles.MapScreen_DeliverySwitcher__animateBlock} ` +
                        `${
                            isDeliveryButton
                                ? styles.MapScreen_DeliverySwitcher__animateBlock_left
                                : styles.MapScreen_DeliverySwitcher__animateBlock_right
                        }`
                    }
                />
                <NavLink
                    className={styles.MapScreen_DeliverySwitcher__a}
                    to={absoluteDeliveryPath}
                >
                    Доставка
                </NavLink>
            </li>
            <li className={styles.MapScreen_DeliverySwitcher__li}>
                <NavLink
                    className={styles.MapScreen_DeliverySwitcher__a}
                    to={absolutePickupPath}
                >
                    Самовывоз
                </NavLink>
            </li>
        </nav>
    );
};

export default DeliverySwitcher;
