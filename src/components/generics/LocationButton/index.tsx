import React from "react";
import styles from "./style.module.scss";
import imageFolder from "../../../constants/imageFolder";

const LocationButton = ({ className }) => {
    return (
        <button className={styles.LocationButton__button + " " + className}>
            <img
                className={styles.LocationButton__svg}
                alt={"location"}
                src={`${imageFolder}locationSign.svg`}
            />
        </button>
    );
};

export default LocationButton;
