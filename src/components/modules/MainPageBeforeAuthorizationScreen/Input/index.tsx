import React from "react";
import CustomInput from "../../../generics/CustomInput";
import styles from "./style.module.scss";
import Button from "../../../generics/Button";

const Input = ({
    placeholder,
    value,
    onInput,
    text,
    inputMask = undefined,
    inputClassName = "",
}) => {
    return (
        <div className={styles.MainPageBeforeAuthorizationScreen_Input__div}>
            <CustomInput
                placeholder={placeholder}
                value={value}
                onInput={onInput}
                className={
                    styles.MainPageBeforeAuthorizationScreen_Input__input +
                    " " +
                    inputClassName
                }
                inputMask={inputMask}
            />
            <div
                className={
                    styles.MainPageBeforeAuthorizationScreen_Input__buttonBlock
                }
            >
                <Button
                    className={styles.MainPageBeforeAuthorizationScreen_Input__button}
                >
                    {text}
                </Button>
            </div>
        </div>
    );
};

export default Input;
