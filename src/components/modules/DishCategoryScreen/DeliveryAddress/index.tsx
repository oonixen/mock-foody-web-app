import React from "react";
import { NavLink } from "react-router-dom";
import imageFolder from "../../../../constants/imageFolder";
import styles from "./style.module.scss";
import RoutePath from "../../../../classes/navigation/RoutePath";

const DeliveryAddress = () => {
    return (
        <NavLink
            className={styles.DishCategoryScreen_DeliveryAddress__navLink}
            to={RoutePath.getDishCategoryPickupMapPath(true)}
        >
            <span className={styles.DishCategoryScreen_DeliveryAddress__parentSpan}>
                <span
                    className={
                        styles.DishCategoryScreen_DeliveryAddress__span +
                        " " +
                        styles.DishCategoryScreen_DeliveryAddress__span_1
                    }
                >
                    Доставка на
                </span>
                <span
                    className={
                        styles.DishCategoryScreen_DeliveryAddress__span +
                        " " +
                        styles.DishCategoryScreen_DeliveryAddress__span_2
                    }
                >
                    ул. Гастелло, 35а
                </span>
            </span>
            <img
                className={styles.DishCategoryScreen_DeliveryAddress__svg}
                src={`${imageFolder}pen.svg`}
                alt={"pen"}
            />
        </NavLink>
    );
};

export default DeliveryAddress;
