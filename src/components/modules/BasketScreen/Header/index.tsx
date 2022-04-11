import React from "react";
import paddingStyle from "../../../../styles/modules/PagePadding.module.scss";
import styles from "./style.module.scss";
import imageFolder from "../../../../constants/imageFolder";
import { NavLink } from "react-router-dom";
import RoutePath from "../../../../classes/navigation/RoutePath";

const Header = () => {
    return (
        <header
            className={
                paddingStyle.PagePadding_horizontal +
                " " +
                styles.BasketScreen_Header__header
            }
        >
            <div className={styles.BasketScreen_Header__leftBlockCombine}>
                <h1 className={styles.BasketScreen_Header__h1}>Корзина</h1>
                <button className={styles.BasketScreen_Header__buttonBin}>
                    <img
                        className={styles.BasketScreen_Header__binImg}
                        src={`${imageFolder}bin_white.svg`}
                        alt={"bin"}
                    />
                </button>
            </div>
            <NavLink
                className={styles.BasketScreen_Header__buttonBack}
                to={RoutePath.getDishCategoryPath(true)}
            >
                <img
                    className={styles.BasketScreen_Header__arrow}
                    src={`${imageFolder}arrow_white.svg`}
                    alt={"arrow"}
                />
                <span>назад</span>
            </NavLink>
        </header>
    );
};

export default Header;
