import React, {useEffect, useRef, useState} from "react";
import styles from "./style.module.scss";
import buttonColors from "../../../constants/buttonColors";
import {concatButtonAnimationElement, getButtonColor} from "./module";
import loaderStyle from "../../../styles/modules/Loader2.module.scss"

const Button = ({
    children,
    onClick = null,
    className = "",
    type = "button",
    color = buttonColors.purpleMedium,
    isShowIncreaseAnimation = false,
    isLoading = false
}) => {

    const [loader, setLoader] = useState(null)
    const ref = useRef<HTMLButtonElement>()
    const buttonColorClass = getButtonColor(color)
    const buttonClass = styles.Button__button + " " + buttonColorClass + " " + className;

    useEffect(() => {
        const heightStr = `${ref.current?.offsetHeight}px`

        const loader =
            <div className={styles.Button__loaderBlock}>
                <div style={{height: heightStr, width: heightStr}} className={loaderStyle.Loader2}/>
            </div>

        setLoader(loader)
    }, [])

    return (
        <div className={styles.Button__div}>
            <button
                style={{visibility: isLoading ? "hidden" : "visible"}}
                ref={ref}
                // @ts-ignore
                type={type}
                className={buttonClass}
                onClick={ () => {
                    if (onClick) onClick()
                    if (isShowIncreaseAnimation) concatButtonAnimationElement(ref)
                }}
            >
                {children}
            </button>
            {isLoading ? loader : null}
        </div>
    );
};

export default Button;
