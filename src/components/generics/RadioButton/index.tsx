import React from "react";
import styles from "./style.module.scss";

const RadioButton = ({
    name,
    children = null,
    labelClass = "",
    description = "",
}) => {
    return (
        <label className={styles.RadioButton__label + " " + labelClass}>
            <input
                className={styles.RadioButton__input}
                name={name}
                type={"radio"}
            />
            {children ? (
                children
            ) : (
                <span className={styles.RadioButton__span}>{description}</span>
            )}
        </label>
    );
};

export default RadioButton;
