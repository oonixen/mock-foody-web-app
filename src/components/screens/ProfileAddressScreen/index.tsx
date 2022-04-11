import React from "react";
import styles from "./style.module.scss";
import {NavLink} from "react-router-dom";
import RoutePath from "../../../classes/navigation/RoutePath";
import AddressEditButton from "../../generics/AddressEditButton";
import imageFolder from "../../../constants/imageFolder";

const ProfileAddressScreen = () => {
    
    const array = Array(3).fill({});

    return (
        <div>
            <div className={styles.ProfileAddressScreen__block}>
                {array.map((v, i) => {
                    return (
                        <NavLink
                            to={RoutePath.getAddressProfileAddressFormPath(
                                true
                            )}
                            key={i}
                            className={styles.ProfileAddressScreen__button}
                        >
                            <AddressEditButton isAliasAbsolute={false} />
                        </NavLink>
                    );
                })}
            </div>
            <NavLink
                to={RoutePath.getAddressProfileAddressFormPath(true)}
                className={styles.ProfileAddressScreen__addAddressButton}
            >
                <img
                    className={styles.ProfileAddressScreen__svg}
                    alt={"plus"}
                    src={`${imageFolder}plusWithRoundBorder.svg`}
                />
                <span className={styles.ProfileAddressScreen__span}>
                    Добавить адрес
                </span>
            </NavLink>
        </div>
    );
};

export default ProfileAddressScreen;
