import React, { useRef } from "react";
import styles from "./style.module.scss";
import imageFolder from "../../../../constants/imageFolder";
import ShowMenuButton from "../../../generics/ShowMenuButton";
import DishSearch from "../../../generics/DishSearch";
import DeliveryAddress from "../DeliveryAddress";
import { NavLink } from "react-router-dom";
import screenWidth from "../../../../constants/screenWidth";
import { useScreenWidth } from "../../../../hooks/screenWidth";
import { useFixBottomHeaderBlock } from "./module";
import stylesPadding from "../../../../styles/modules/PagePadding.module.scss";
import RoutePath from "../../../../classes/navigation/RoutePath";
import { ProfileNavigation } from "../../../../classes/navigation/ProfileNavigation";
import ButtonNavLink from "../../../generics/ButtonNavLink";

const Header = () => {
    const topBlockRef = useRef();

    return (
        <header className={styles.DishCategoryScreen_Header__header}>
            <div
                ref={topBlockRef}
                className={
                    styles.DishCategoryScreen_Header__topBlock +
                    " " +
                    stylesPadding.PagePadding_horizontal
                }
            >
                <div className={styles.DishCategoryScreen_Header__div}>
                    <img
                        className={styles.DishCategoryScreen_Header__logo}
                        src={`${imageFolder}foodyNamePurple.svg`}
                        alt={"logo"}
                    />
                    <ShowMenuButton
                        className={
                            styles.DishCategoryScreen_Header__showMenuButtonBlock
                        }
                    />
                    <DishSearch />
                </div>
                <div className={styles.DishCategoryScreen_Header__div}>
                    <DeliveryAddress />
                    <ButtonNavLink
                        className={styles.DishCategoryScreen_Header__basketButton}
                        to={RoutePath.getBasketPath(true)}
                    >
                        корзина
                    </ButtonNavLink>
                    <NavLink
                        to={ProfileNavigation.getProfilePath()}
                        className={styles.DishCategoryScreen_Header__profileNav}
                    >
                        <img
                            className={styles.DishCategoryScreen_Header__userLogo}
                            src={`${imageFolder}user.svg`}
                            alt={"user"}
                        />
                    </NavLink>
                </div>
            </div>
            <BottomBlock ref={topBlockRef} />
        </header>
    );
};

const BottomBlock = React.forwardRef((props, ref) => {
    const blockRef = useRef();
    const { width } = useScreenWidth();

    useFixBottomHeaderBlock(blockRef, ref);

    return (
        <div
            style={{ display: width > screenWidth.tablet ? "none" : "block" }}
            className={styles.DishCategoryScreen_Header__bottomBlock_parent}
        >
            <div
                ref={blockRef}
                className={
                    styles.DishCategoryScreen_Header__bottomBlock +
                    " " +
                    stylesPadding.PagePadding_horizontal
                }
            >
                <DishSearch
                    inputStyle={styles.DishCategoryScreen_Header__dishSearchInput}
                />
            </div>
        </div>
    );
});

export default Header;
