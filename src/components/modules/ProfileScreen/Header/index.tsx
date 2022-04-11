import React from "react";
import styles from "./style.module.scss";
import { NavLink } from "react-router-dom";
import paddingStyle from "../../../../styles/modules/PagePadding.module.scss";
import imageFolder from "../../../../constants/imageFolder";
import { useReceiveBackButtonPath } from "./module";
import ProfileNavSection from "../../../generics/ProfileNavSection";
import Button from "../../../generics/Button";

const Header = () => {
    const backPath = useReceiveBackButtonPath();

    return (
        <header
            className={
                styles.ProfileScreen_Header__header +
                " " +
                paddingStyle.PagePadding_horizontal
            }
        >
            <ProfileNavSection className={styles.ProfileScreen_Header__nav} />
            <NavLink to={backPath}>
                <Button
                    className={styles.ProfileScreen_Header__backButton}
                >
                    <img
                        alt={"arrow"}
                        src={`${imageFolder}arrow_white.svg`}
                        className={styles.ProfileScreen_Header__arrow}
                    />
                    <span className={styles.ProfileScreen_Header__buttonText}>
                        назад
                    </span>
                </Button>
            </NavLink>
        </header>
    );
};

export default Header;
