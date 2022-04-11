import React, { useState } from "react";
import styles from "./style.module.scss";
import { ICustomSelector } from "./interface";

export const CustomSelector: React.FC<ICustomSelector> = ({
    defaultValue = "",
    placeholder = "",
    inputStyle = "",
    hintText = undefined,
    required = false,
    buttonStyle = "",
    suggestionObj = { action: () => null, nameParam: "" },
    delay = 0,
    onChange = () => null,
    selectButtonStyle = "",
    suggestionsBlockStyle = {},
    minChars = 1,
    clearButton = false,
    containerClassName = "",
    isDisabled = false,
    suggestionContainer = "",
    ButtonContent,
}) => {
    const defaultCurrentSuggestion = null;

    const [text, setText] = useState(defaultValue);
    const [show, setShow] = useState(false);
    const [timerID, setTimerID] = useState(setTimeout(() => {}, 0));
    const [suggestions, setSuggestions] = useState([]);
    const [currentSuggestion, setCurrentSuggestion] = useState(
        defaultCurrentSuggestion
    );

    const onClickSuggestion = (v) => {
        setShow(false);
        setCurrentSuggestion(defaultCurrentSuggestion);
        setText(v[suggestionObj.nameParam]);
        onChange(v);
    };

    return (
        <div className={`${styles.CustomSelector__div} ${containerClassName}`}>
            <input
                disabled={isDisabled}
                required={required}
                value={text}
                placeholder={placeholder}
                className={inputStyle}
                onChange={(value) => {
                    setCurrentSuggestion(defaultCurrentSuggestion);
                    onChangeInputCustomSelector(
                        value.target.value,
                        setText,
                        timerID,
                        minChars,
                        suggestionObj.action,
                        setSuggestions,
                        delay,
                        setTimerID,
                        setShow
                    );
                }}
                onBlur={() => {
                    setShow(false);
                    setCurrentSuggestion(defaultCurrentSuggestion);
                }}
                onFocus={() => setShow(true)}
                onKeyDown={(event) => {
                    const arrowUp = "ArrowUp";
                    const arrowDown = "ArrowDown";
                    const enterKey = "Enter";
                    const eventKey = event.key;

                    if (
                        (eventKey === arrowUp ||
                            eventKey === arrowDown ||
                            eventKey === enterKey) &&
                        suggestions.length > 0
                    ) {
                        event.preventDefault();
                        if (eventKey === arrowUp) {
                            switchSuggestion(
                                currentSuggestion,
                                setCurrentSuggestion,
                                suggestions,
                                arrowUp,
                                arrowDown,
                                arrowUp,
                                defaultCurrentSuggestion
                            );
                        } else if (eventKey === arrowDown) {
                            switchSuggestion(
                                currentSuggestion,
                                setCurrentSuggestion,
                                suggestions,
                                arrowUp,
                                arrowDown,
                                arrowDown,
                                defaultCurrentSuggestion
                            );
                        } else if (
                            eventKey === enterKey &&
                            currentSuggestion !== defaultCurrentSuggestion
                        ) {
                            onClickSuggestion(suggestions[currentSuggestion]);
                        }
                    }
                }}
            />
            {clearButton && text.length >= minChars ? (
                <button
                    onClick={() => setText("")}
                    className={styles.CustomSelector__clearButton}
                >
                    x
                </button>
            ) : null}
            <AddressSuggestion
                show={show}
                suggestions={suggestions}
                currentSuggestion={currentSuggestion}
                hintText={hintText}
                buttonStyle={buttonStyle}
                selectButtonStyle={selectButtonStyle}
                onClickSuggestion={onClickSuggestion}
                paramOfTextSuggestion={suggestionObj.nameParam}
                suggestionsBlockStyle={suggestionsBlockStyle}
                suggestionContainer={suggestionContainer}
                ButtonContent={ButtonContent}
            />
        </div>
    );
};

const AddressSuggestion = ({
    suggestions,
    show,
    hintText,
    buttonStyle,
    currentSuggestion,
    selectButtonStyle,
    onClickSuggestion,
    paramOfTextSuggestion,
    suggestionsBlockStyle,
    suggestionContainer,
    ButtonContent,
}) => {
    const isHintText = hintText !== undefined;

    let jsx = null;

    if (suggestions.length > 0 && show) {
        jsx = (
            <div
                className={
                    styles.CustomSelector__suggestionBlock +
                    " " +
                    suggestionContainer
                }
                style={suggestionsBlockStyle}
            >
                {isHintText ? (
                    <button
                        onClick={(event) => event.preventDefault()}
                        className={styles.CustomSelector__suggestionHint}
                    >
                        {hintText}
                    </button>
                ) : null}
                {suggestions.map((v, i) => {
                    const radius = "4px";
                    const length = suggestions.length - 1;
                    const isLast = i === length;
                    const isFirst = i === 0 && !isHintText;

                    return (
                        <button
                            style={{
                                borderTopRightRadius: isFirst ? radius : "",
                                borderTopLeftRadius: isFirst ? radius : "",
                                borderBottomLeftRadius: isLast ? radius : "",
                                borderBottomRightRadius: isLast ? radius : "",
                            }}
                            key={i}
                            className={`${buttonStyle} ${
                                i === currentSuggestion ? selectButtonStyle : ""
                            }`}
                            onMouseDown={(event) => {
                                event.preventDefault();
                            }}
                            onClick={() => onClickSuggestion(v)}
                        >
                            <ButtonContent value={v[paramOfTextSuggestion]} />
                        </button>
                    );
                })}
            </div>
        );
    }

    return jsx;
};

function onChangeInputCustomSelector(
    text,
    setText,
    timerID,
    minChars,
    getSuggestions,
    setSuggestions,
    delay,
    setTimerID,
    setShow
) {
    setText(text);
    clearTimeout(timerID);
    if (text.length >= minChars) {
        const newTimer = setTimeout(() => {
            let newArray = getSuggestions(text);

            if (newArray.then !== undefined) {
                newArray.then((v) => setSuggestions(v));
            } else {
                setSuggestions(newArray);
            }
        }, delay);

        setTimerID(newTimer);
        setShow(true);
    }
}

function switchSuggestion(
    currentSuggestion,
    setCurrentSuggestion,
    suggestions,
    arrowUp,
    arrowDown,
    arrow,
    defaultCurrentSuggestion
) {
    const isArrowDown = arrow === arrowDown;
    const isArrowUp = arrow === arrowUp;
    const suggestionsLength = suggestions.length - 1;

    if (currentSuggestion === defaultCurrentSuggestion) {
        if (isArrowDown) setCurrentSuggestion(0);
        else if (isArrowUp) setCurrentSuggestion(suggestionsLength);
    } else if (isArrowDown) {
        const willSelectSuggestion = currentSuggestion + 1;
        if (willSelectSuggestion > suggestionsLength) setCurrentSuggestion(0);
        else setCurrentSuggestion(willSelectSuggestion);
    } else if (isArrowUp) {
        const willSelectSuggestion = currentSuggestion - 1;
        if (willSelectSuggestion < 0) setCurrentSuggestion(suggestionsLength);
        else setCurrentSuggestion(willSelectSuggestion);
    }
}
