import React, { FC, FormEvent } from "react";
import InputMask from "react-input-mask";

interface ICustomInput {
    placeholder: string;
    value: string;
    onInput: (event: FormEvent<HTMLInputElement>) => any;
    className?: string;
    inputMask?: string;
    required?: boolean;
}

const CustomInput: FC<ICustomInput> = ({
    placeholder,
    value,
    onInput,
    className = "",
    inputMask,
    required = false,
}) => {
    const props = {
        className: className,
        placeholder: placeholder,
        value: value,
        onInput: onInput,
        required: required,
    };

    if (inputMask) return <InputMask mask={inputMask} {...props} />;

    return <input {...props} />;
};

export default CustomInput;
