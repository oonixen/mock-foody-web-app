import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import BackgroundBlackout from "../BackgroundBlackout";
import RoutePath from "../../../classes/navigation/RoutePath";
import styles from "./style.module.scss";
import Button from "../Button";

const BasketModalChooseTemplate = ({ children, title }) => {
    const navigation = useNavigate();

    return (
        <BackgroundBlackout
            onClick={() => navigation(RoutePath.getBasketPath(true))}
            isShowCloseButton={true}
        >
            <section className={styles.BasketModalChooseTemplate__section}>
                <h1 className={styles.BasketModalChooseTemplate__h1}>
                    {title}
                </h1>
                {children}
                <NavLink
                    to={RoutePath.getBasketPath(true)}
                    className={styles.BasketModalChooseTemplate__navLink}
                >
                    <Button>
                        выбрать
                    </Button>
                </NavLink>
            </section>
        </BackgroundBlackout>
    );
};

export default BasketModalChooseTemplate;
