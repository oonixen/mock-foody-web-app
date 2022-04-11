import React from "react";
import MainUserInfoSection from "../../generics/MainUserInfoSection";
import ProfileNavSection from "../../generics/ProfileNavSection";
import styles from "./style.module.scss";
import Button from "../../generics/Button";
import buttonColors from "../../../constants/buttonColors";

const ProfileNavigationScreen = () => {

    return (
        <>
            <MainUserInfoSection />
            <ProfileNavSection
                className={styles.ProfileNavigationScreen__nav}
                buttonClassName={styles.ProfileNavigationScreen__button}
            />
            <Button
                className={styles.ProfileNavigationScreen__exitButton}
                color={buttonColors.inherit}
            >
                выйти
            </Button>
        </>
    );
};

export default ProfileNavigationScreen;
