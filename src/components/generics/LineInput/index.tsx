import React from "react";
import CustomInput from "../CustomInput";
import styles from "./style.module.scss";

const LineInput = ({
    className = "",
    placeholder,
    value,
    inputMask = undefined,
    onInput,
    required = false,
}) => {
    const inputClass = styles.LineInput__input + " " + className;

    return (
        <CustomInput
            className={inputClass}
            placeholder={placeholder}
            value={value}
            onInput={onInput}
            inputMask={inputMask}
            required={required}
        />
    );
};

export default LineInput;
