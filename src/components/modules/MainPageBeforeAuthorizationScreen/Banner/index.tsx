import React from "react";
import styles from "./style.module.scss";
import imageFolder from "../../../../constants/imageFolder";
import { useNavigate } from "react-router-dom";
import RoutePath from "../../../../classes/navigation/RoutePath";

const Banner = () => {
    const navigation = useNavigate();

    return (
        <section
            className={
                styles.MainPageBeforeAuthorizationScreen_Banner__bannerContainer
            }
        >
            <div
                className={
                    `${styles.MainPageBeforeAuthorizationScreen_Banner__bannerBlockContainer} ` +
                    `${styles.MainPageBeforeAuthorizationScreen_Banner__bannerTextBlock}`
                }
            >
                <img
                    src={`${imageFolder}foodyName.svg`}
                    className={
                        styles.MainPageBeforeAuthorizationScreen_Banner__foodyName
                    }
                    alt={"foodie's name"}
                />
                <h1 className={styles.MainPageBeforeAuthorizationScreen_Banner__h1}>
                    быстрая доставка еды
                    {` `}
                    <span
                        className={
                            styles.MainPageBeforeAuthorizationScreen_Banner__span
                        }
                    >
                        за 30 мин
                    </span>
                </h1>
                <button
                    className={
                        styles.MainPageBeforeAuthorizationScreen_Banner__button
                    }
                    onClick={() => navigation(RoutePath.getSendCodePath(true))}
                >
                    Войти и заказать
                </button>
            </div>
            <div
                className={
                    `${styles.MainPageBeforeAuthorizationScreen_Banner__bannerBlockContainer} ` +
                    `${styles.MainPageBeforeAuthorizationScreen_Banner__bannerImgBlock}`
                }
            >
                <img
                    className={styles.MainPageBeforeAuthorizationScreen_Banner__img}
                    src={`${imageFolder}image_2022-02-04_15-25-55.png`}
                />
            </div>
        </section>
    );
};

export default Banner;
