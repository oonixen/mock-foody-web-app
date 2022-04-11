import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./style.module.scss"
import imageFolder from "../../../../constants/imageFolder";
import symbols from "../../../../constants/symbols";
import RoutePath from "../../../../classes/navigation/RoutePath";

const OrderNavLink = ({orderId}) => {
    return (
        <NavLink
            to={RoutePath.getOrderProfilePath(true, orderId)}
            className={styles.OrdersProfileScreen_OrderNavLink__navLink}
        >
            <div
                className={styles.OrdersProfileScreen_OrderNavLink__leftBlock}
            >
                <span
                    className={styles.OrdersProfileScreen_OrderNavLink__orderNum}
                >
                    № 1526
                </span>
                <span
                    className={styles.OrdersProfileScreen_OrderNavLink__orderDate}
                >
                    Доставили 4 дек 2021, 16:46
                </span>
            </div>
            <div
                className={styles.OrdersProfileScreen_OrderNavLink__rightBlock}
            >
                <span
                    className={styles.OrdersProfileScreen_OrderNavLink__orderSum}
                >
                    {`355 ${symbols.ruble}`}
                </span>
                <img
                    src={`${imageFolder}arrow.svg`}
                    alt={"arrow-right"}
                />
            </div>
        </NavLink>
    )
}

export default OrderNavLink