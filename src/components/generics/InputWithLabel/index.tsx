import React from "react";
import styles from "./style.module.scss";

const InputWithLabel = ({
    labelName,
    blockClassName = "",
    inputClassName = "",
    placeholder = "",
    getInputComponent = null,
}) => {
    return (
        <label className={styles.InputWithLabel__label + " " + blockClassName}>
            <span className={styles.InputWithLabel__span}>{labelName}</span>
            {getInputComponent ? (
                getInputComponent(
                    styles.InputWithLabel__input + " " + inputClassName
                )
            ) : (
                <input
                    className={
                        styles.InputWithLabel__input + " " + inputClassName
                    }
                    placeholder={placeholder}
                />
            )}
        </label>
    );
};

export default InputWithLabel;
