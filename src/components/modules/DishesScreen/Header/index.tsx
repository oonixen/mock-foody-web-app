import React from "react";
import styles from "./style.module.scss";
import stylesPadding from "../../../../styles/modules/PagePadding.module.scss";
import imageFolder from "../../../../constants/imageFolder";
import ShowMenuButton from "../../../generics/ShowMenuButton";
import DishSearch from "../../../generics/DishSearch";
import { NavLink } from "react-router-dom";
import RoutePath from "../../../../classes/navigation/RoutePath";
import ButtonNavLink from "../../../generics/ButtonNavLink";

const Header = () => {
    return (
        <header
            className={
                stylesPadding.PagePadding_horizontal +
                " " +
                styles.DishesScreen_Header__header
            }
        >
            <NavLink
                to={RoutePath.getDishCategoryPath(true)}
                className={styles.DishesScreen_Header__backButton}
            >
                <img
                    className={styles.DishesScreen_Header__arrow}
                    alt={"arrow"}
                    src={`${imageFolder}arrow.svg`}
                />
                <p>назад</p>
            </NavLink>
            <div className={styles.DishesScreen_Header__leftHeaderBlock}>
                <NavLink
                    className={styles.DishesScreen_Header__backNavLink}
                    to={RoutePath.getDishCategoryPath(true)}
                >
                    <img
                        className={styles.DishesScreen_Header__logo}
                        alt={"logo"}
                        src={`${imageFolder}foodyLogo.svg`}
                    />
                </NavLink>
                <ShowMenuButton
                    className={styles.DishesScreen_Header__showMenuButtonBlock}
                />
                <DishSearch />
            </div>
            <ButtonNavLink
                className={styles.DishesScreen_Header__RoundBorderButton}
                to={RoutePath.getBasketPath(true)}
            >
                корзина
            </ButtonNavLink>
        </header>
    );
};

export default Header;
