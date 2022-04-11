import React from "react";
import Toggle from "../../../generics/Toggle";
import styles from "./style.module.scss"

const Switcher = ({text}) => {
    return (
        <label
            className={styles.PreferencesScreen_Switcher__label}
        >
            <span
                className={styles.PreferencesScreen_Switcher__span}
            >
                {text}
            </span>
            <Toggle
                id={""}
            />
        </label>
    )
}

export default Switcher