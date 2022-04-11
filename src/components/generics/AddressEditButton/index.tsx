import React from "react";
import styles from "./style.module.scss";
import imageFolder from "../../../constants/imageFolder";

const AddressEditButton = ({ isAliasAbsolute = true }) => {
    return (
        <div
            className={
                styles.AddressEditButton__radioButtonBlock +
                " " +
                `${
                    !isAliasAbsolute
                        ? styles.AddressEditButton__addressNameBlock_column
                        : ""
                }`
            }
        >
            <span
                className={
                    styles.AddressEditButton__addressNickname +
                    " " +
                    `${
                        isAliasAbsolute
                            ? styles.AddressEditButton__addressNickname_absolute
                            : ""
                    }`
                }
            >
                дом
            </span>
            <div className={styles.AddressEditButton__nameAndPenBlock}>
                <span className={styles.AddressEditButton__addressName}>
                    ул. Гастелло, 35
                </span>
                <img
                    className={styles.AddressEditButton__pen}
                    src={`${imageFolder}pen.svg`}
                    alt={"pen"}
                />
            </div>
        </div>
    );
};

export default AddressEditButton;
