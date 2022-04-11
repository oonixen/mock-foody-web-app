import React from "react";
import styles from "./style.module.scss";
import { NavLink } from "react-router-dom";
import imageFolder from "../../../../constants/imageFolder";
import symbols from "../../../../constants/symbols";
import RoutePath from "../../../../classes/navigation/RoutePath";
import Button from "../../../generics/Button";

const Registration = () => {
    return (
        <div>
            <h2 className={styles.BasketScreen_Registration__h2}>Оформление</h2>
            <div className={styles.BasketScreen_Registration__topBlock}>
                <span className={styles.BasketScreen_Registration__deliverSpan}>
                    Доставим
                </span>
                <NavLink
                    to={RoutePath.getBasketPromoPath(true)}
                    className={styles.BasketScreen_Registration__promoButton}
                >
                    промокод
                </NavLink>
            </div>
            <nav className={styles.BasketScreen_Registration__nav}>
                <NavButton
                    to={RoutePath.getBasketSelectAddressPath(true)}
                    iconSrc={`${imageFolder}house.svg`}
                    value={null}
                />
                <NavButton
                    to={RoutePath.getBasketSelectPaymentPath(true)}
                    iconSrc={`${imageFolder}card.svg`}
                    value={null}
                />
                <NavButton
                    to={RoutePath.getBasketSelectDeliveryTimePath(true)}
                    iconSrc={`${imageFolder}timer.svg`}
                    value={null}
                />
            </nav>
            <input
                className={styles.BasketScreen_Registration__promoInput}
                placeholder={"промокод"}
            />
            <Button
                className={styles.BasketScreen_Registration__orderButton}
            >
                заказать за 1432
                {` ${symbols.ruble}`}
            </Button>
        </div>
    );
};

const NavButton = ({ to, iconSrc, value }) => {
    if (!value) value = "выбрать";

    return (
        <NavLink to={to} className={styles.BasketScreen_Registration__NavLink}>
            <div className={styles.BasketScreen_Registration__infoBlock}>
                <img
                    className={styles.BasketScreen_Registration__img}
                    src={iconSrc}
                    alt={"infoImg"}
                />
                <span className={styles.BasketScreen_Registration__valueText}>
                    {value}
                </span>
            </div>
            <img
                className={styles.BasketScreen_Registration__arrow}
                src={`${imageFolder}arrow.svg`}
                alt={"arrow"}
            />
        </NavLink>
    );
};

export default Registration;
