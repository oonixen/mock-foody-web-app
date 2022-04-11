import React, { useRef } from "react";
import styles from "./style.module.scss";
import imageFolder from "../../../../constants/imageFolder";
import { subscribeMopedAction } from "./model";

const MarketingTextBlock = () => {
    const mopedRef = useRef();

    subscribeMopedAction(mopedRef);

    return (
        <section
            className={
                styles.MainPageBeforeAuthorizationScreen_MarketingTextBlock__section
            }
        >
            <p
                className={
                    styles.MainPageBeforeAuthorizationScreen_MarketingTextBlock__p
                }
            >
                Рыбы больше, чем в океане! Лосось, тунец и экзотичный
                апельсиновый соус никого не оставят равнодушным. Перекус для
                тех, кто хочет есть не только полезное, но и красивое
            </p>
            <img
                ref={mopedRef}
                className={
                    styles.MainPageBeforeAuthorizationScreen_MarketingTextBlock__svg
                }
                src={`${imageFolder}moped.svg`}
                alt={"moped"}
            />
        </section>
    );
};

export default MarketingTextBlock;
