import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.scss";
import imageFolder from "../../../constants/imageFolder";
import RoutePath from "../../../classes/navigation/RoutePath";

const ProfileNavSection = ({ className = "", buttonClassName = "" }) => {
    return (
        <nav className={styles.ProfileNavSection__nav + " " + className}>
            <ProfileNavButton
                className={buttonClassName}
                to={RoutePath.getAddressProfilePath(true)}
                svg={"house_square.svg"}
                name={"Адрес доставки"}
            />
            <ProfileNavButton
                className={buttonClassName}
                to={RoutePath.getPreferencesProfilePath(true)}
                svg={"heart.svg"}
                name={"Предпочтения"}
            />
            <ProfileNavButton
                className={buttonClassName}
                to={RoutePath.getOrdersProfilePath(true)}
                svg={"basket.svg"}
                name={"Заказы"}
            />
            <ProfileNavButton
                className={buttonClassName}
                to={RoutePath.getProfilePromoPath(true)}
                svg={"percent.svg"}
                name={"Промокод"}
            />
        </nav>
    );
};

const ProfileNavButton = ({ to, svg, name, className }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => {
                let defaultStyle =
                    styles.ProfileNavSection__navButton + " " + className;
                if (isActive)
                    defaultStyle += ` ${styles.ProfileNavSection__navButton_active}`;
                return defaultStyle;
            }}
        >
            <img
                src={`${imageFolder}${svg}`}
                alt={name}
                className={styles.ProfileNavSection__img}
            />
            <span className={styles.ProfileNavSection__navButtonText}>
                {name}
            </span>
        </NavLink>
    );
};

export default ProfileNavSection;
