import React from "react";
import styles from "./style.module.scss";
import imageFolder from "../../../../constants/imageFolder";
import { CustomSelector } from "../../../generics/CustomSelector";
import Button from "../../../generics/Button";
import selectorStyles from "../../../../styles/modules/CustomSelector.module.scss";

const Map = () => {
    return (
        <section className={styles.MainPageBeforeAuthorizationScreen_Map__section}>
            <div
                className={styles.MainPageBeforeAuthorizationScreen_Map__mapSection}
            />
            <div
                className={
                    styles.MainPageBeforeAuthorizationScreen_Map__checkDeliveryZoneSection
                }
                style={{
                    backgroundImage: `url("${imageFolder}mapPointDecorSign.svg")`,
                }}
            >
                <p className={styles.MainPageBeforeAuthorizationScreen_Map__p}>
                    Проверьте входит ли ваш адрес в зону доставки
                </p>
                <div
                    className={
                        styles.MainPageBeforeAuthorizationScreen_Map__inputSection
                    }
                >
                    <CustomSelector
                        placeholder={"Гастелло, 35а"}
                        ButtonContent={ButtonSuggestion}
                        onChange={(value) => console.log(value)}
                        buttonStyle={
                            selectorStyles.CustomSelector__suggestionButton
                        }
                        suggestionContainer={
                            selectorStyles.CustomSelector__suggestionContainer
                        }
                        inputStyle={
                            styles.MainPageBeforeAuthorizationScreen_Map__input
                        }
                        selectButtonStyle={
                            selectorStyles.CustomSelector__suggestionButton_active
                        }
                        suggestionObj={{
                            action: () => {
                                return [{ param: "123123" }, { param: "321" }];
                            },
                            nameParam: "param",
                        }}
                    />
                    <div
                        className={
                            styles.MainPageBeforeAuthorizationScreen_Map__buttonBlock
                        }
                    >
                        <Button
                            className={
                                styles.MainPageBeforeAuthorizationScreen_Map__button
                            }
                        >
                            ок
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ButtonSuggestion = ({ value }) => {
    return (
        <>
            <span
                className={
                    styles.MainPageBeforeAuthorizationScreen_Map__suggestion_top
                }
            >
                {value}
            </span>
            <br />
            <span
                className={
                    styles.MainPageBeforeAuthorizationScreen_Map__suggestion_bottom
                }
            >
                {value}
            </span>
        </>
    );
};

export default Map;
