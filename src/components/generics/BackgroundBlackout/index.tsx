import React, { useEffect } from "react";
import styles from "./style.module.scss";
import imageFolder from "../../../constants/imageFolder";

const BackgroundBlackout = ({
    children = null,
    onClick = undefined,
    isShowCloseButton = false,
}) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    });

    const styleBlock = {
        cursor: !onClick ? "auto" : "pointer",
    };

    return (
        <div
            onClick={onClick}
            className={styles.BackgroundBlackout__blackoutBlock}
            style={styleBlock}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={styles.BackgroundBlackout__content}
            >
                {isShowCloseButton ? (
                    <button
                        onClick={onClick}
                        className={styles.BackgroundBlackout__closeButton}
                    >
                        <img
                            alt={"close"}
                            src={`${imageFolder}multiply_white.svg`}
                        />
                    </button>
                ) : null}
                {children}
            </div>
        </div>
    );
};

export default BackgroundBlackout;
