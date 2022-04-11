import React from "react";

interface ISuggestionObj {
    action: (query: any) => any;
    nameParam: string;
}
interface ButtonContentParam {
    value: any;
}
export interface ICustomSelector {
    defaultValue?: string;
    placeholder?: string;
    inputStyle?: string;
    hintText?: string;
    required?: boolean;
    buttonStyle?: string;
    suggestionObj?: ISuggestionObj;
    delay?: number;
    onChange?: (value?: any) => any;
    selectButtonStyle?: string;
    suggestionsBlockStyle?: { any };
    minChars?: number;
    clearButton?: boolean;
    containerClassName?: string;
    isDisabled?: boolean;
    suggestionContainer?: string;
    ButtonContent: React.FC<ButtonContentParam>;
}
