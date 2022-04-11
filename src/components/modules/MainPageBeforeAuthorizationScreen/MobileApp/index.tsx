import React, { useState } from "react";
import styles from "./style.module.scss";
import imageFolder from "../../../../constants/imageFolder";
import Input from "../Input";

const MobileApp = () => {
    const [phone, setPhone] = useState("");

    return (
        <section
            className={styles.MainPageBeforeAuthorizationScreen_MobileApp__section}
        >
            <div
                style={{
                    backgroundImage: `url(${imageFolder}image_2022-02-07_15-55-44.png)`,
                }}
                className={
                    styles.MainPageBeforeAuthorizationScreen_MobileApp__phonePicBlock
                }
            />
            <div
                className={
                    styles.MainPageBeforeAuthorizationScreen_MobileApp__sendBlock
                }
            >
                <p
                    className={
                        styles.MainPageBeforeAuthorizationScreen_MobileApp__textHeader
                    }
                >
                    Удобное приложение
                </p>
                <p
                    className={
                        styles.MainPageBeforeAuthorizationScreen_MobileApp__text
                    }
                >
                    Рыбы больше, чем в океане! Лосось, тунец и экзотичный
                    апельсиновый соус никого не оставят равнодушным. Перекус для
                    тех, кто хочет есть не только полезное, но и красивое.
                </p>
                <Input
                    placeholder={"8 917 000-00-00"}
                    value={phone}
                    onInput={(e) => setPhone(e.target.value)}
                    text={"Отправить"}
                    inputMask={"8 999 999-99-99"}
                    inputClassName={
                        styles.MainPageBeforeAuthorizationScreen_MobileApp__input
                    }
                />
                <p className={styles.MainPageBeforeAuthorizationScreen_MobileApp__p}>
                    отправим вам ссылку на скачивание приложения
                </p>
            </div>
        </section>
    );
};

export default MobileApp;
