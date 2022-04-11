import React from "react";
import styles from "./style.module.scss";

const Checkbox = ({ children, classContainer = "", required = false }) => {
    const labelClass = styles.Checkbox__container + " " + classContainer;

    return (
        <label className={labelClass}>
            {children}
            <input
                required={required}
                type={"checkbox"}
                className={styles.Checkbox__checkbox}
            />
            <span className={styles.Checkbox__checkmark} />
        </label>
    );
};

export default Checkbox;
