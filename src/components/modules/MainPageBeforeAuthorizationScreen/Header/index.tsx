import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import imageFolder from "../../../../constants/imageFolder";
import { animateHeaderText, observeText } from "./model";

const Header = () => {
    const headerRef: React.MutableRefObject<any> = useRef(null);
    const rootMargin = 0;

    useEffect(() => {
        animateHeaderText(headerRef);
        observeText(headerRef, rootMargin);
    }, []);

    return (
        <header
            ref={headerRef}
            className={styles.MainPageBeforeAuthorizationScreen_Header__header}
        >
            <Text
                text={"Работаем каждый день с 8 до 23"}
                svg={"clock"}
                alt={"clock"}
            />
            <Text
                text={"Актуальное меню зависит от адреса"}
                svg={"moped"}
                alt={"moped"}
            />
            <Text
                text={"Работаем каждый день с 8 до 23"}
                svg={"clock"}
                alt={"clock"}
            />
            <Text
                text={"Актуальное меню зависит от адреса"}
                svg={"moped"}
                alt={"moped"}
            />
            <Text
                text={"Работаем каждый день с 8 до 23"}
                svg={"clock"}
                alt={"clock"}
            />
            <Text
                text={"Актуальное меню зависит от адреса"}
                svg={"moped"}
                alt={"moped"}
            />
            <Text
                text={"Работаем каждый день с 8 до 23"}
                svg={"clock"}
                alt={"clock"}
            />
            <Text
                text={"Актуальное меню зависит от адреса"}
                svg={"moped"}
                alt={"moped"}
            />
        </header>
    );
};

type TextProps = {
    text: string;
    svg: string;
    alt: string;
};

const Text: React.FC<TextProps> = ({ text, svg, alt }) => {
    return (
        <div className={styles.MainPageBeforeAuthorizationScreen_Header__textBlock}>
            <img
                className={styles.MainPageBeforeAuthorizationScreen_Header__svg}
                src={`${imageFolder}${svg}.svg`}
                alt={alt}
            />
            <span className={styles.MainPageBeforeAuthorizationScreen_Header__text}>
                {text}
            </span>
        </div>
    );
};

export default Header;
