import React from "react";
import styles from "./style.module.scss";
import symbols from "../../../../constants/symbols";
import { NavLink, useLocation } from "react-router-dom";
import RoutePath from "../../../../classes/navigation/RoutePath";

const BottomBasketButton = () => {
    const location = useLocation();
    const basketPath = RoutePath.getBasketPath();
    const regExp = new RegExp(
        `^\/${basketPath.substring(0, basketPath.length - 1)}($|\/)`
    );

    if (regExp.test(location.pathname)) return null;

    return (
        <NavLink
            className={styles.RootNavigation_BottomBasketButton__button}
            to={RoutePath.getBasketPath(true)}
        >
            <p className={styles.RootNavigation_BottomBasketButton__sum}>
                {`1065 ${symbols.ruble}`}
            </p>
            <p className={styles.RootNavigation_BottomBasketButton__count}>
                3 блюда
            </p>
        </NavLink>
    );
};

export default BottomBasketButton;
