import React from "react";
import styles from "./style.module.scss";
import imageFolder from "../../../constants/imageFolder";
import {NavLink} from "react-router-dom";
import RoutePath from "../../../classes/navigation/RoutePath";
import {useScreenWidth} from "../../../hooks/screenWidth";
import screenWidth from "../../../constants/screenWidth";

const MainUserInfoSection = () => {

    const {width} = useScreenWidth()

    const content =
        <>
            <div className={styles.MainUserInfoSection__nameAndPhoneBlock}>
                <div className={styles.MainUserInfoSection__nameAndPenBlock}>
                    <span className={styles.MainUserInfoSection__name}>
                        Дмитрий
                    </span>
                    <img
                        className={styles.MainUserInfoSection__pen}
                        alt={"pen"}
                        src={`${imageFolder}pen.svg`}
                    />
                </div>
                <span className={styles.MainUserInfoSection__phone}>
                    8 917 149 97 88
                </span>
            </div>
            <img
                className={styles.MainUserInfoSection__avatar}
                alt={"avatar"}
                src={`${imageFolder}user.svg`}
            />
        </>

    if (width > screenWidth.tablet) {
        return (
            <div className={styles.MainUserInfoSection__infoBlock}>
                {
                    content
                }
            </div>
        )
    }

    return (
        <NavLink
            to={RoutePath.getProfilePersonalInfoPath(true)}
            className={styles.MainUserInfoSection__infoBlock}
        >
            {
                content
            }
        </NavLink>
    );
};

export default MainUserInfoSection;
