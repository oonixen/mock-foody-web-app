import React from "react";
import {useNavigate} from "react-router-dom";
import BackgroundBlackout from "../../generics/BackgroundBlackout";
import styles from "./style.module.scss";
import InputWithLabel from "../../generics/InputWithLabel";
import {CustomSelector} from "../../generics/CustomSelector";
import selectorStyles from "../../../styles/modules/CustomSelector.module.scss";
import Button from "../../generics/Button";

const CreateAddressWindowScreen = ({ backUrl }) => {
    
    const navigate = useNavigate();

    return (
        <BackgroundBlackout
            onClick={() => navigate(backUrl)}
            isShowCloseButton={true}
        >
            <section
                className={styles.CreateAddressWindowScreen__section}
            >
                <h1 className={styles.CreateAddressWindowScreen__h1}>
                    Новый адрес
                </h1>
                <InputWithLabel
                    labelName={"Название"}
                    blockClassName={
                        styles.CreateAddressWindowScreen__inputBlockClassName
                    }
                />
                <InputWithLabel
                    getInputComponent={(inputStyle) => (
                        <CustomSelector
                            inputStyle={inputStyle}
                            ButtonContent={({ value }) => <span>{value}</span>}
                            suggestionObj={{
                                action: () => [
                                    { name: "Дачная" },
                                    { name: "Московская" },
                                ],
                                nameParam: "name",
                            }}
                            buttonStyle={
                                selectorStyles.CustomSelector__suggestionButton
                            }
                            selectButtonStyle={
                                selectorStyles.CustomSelector__suggestionButton_active
                            }
                            suggestionContainer={
                                selectorStyles.CustomSelector__suggestionContainer
                            }
                        />
                    )}
                    labelName={"Улица, дом"}
                    blockClassName={
                        styles.CreateAddressWindowScreen__inputBlockClassName
                    }
                />
                <div
                    className={
                        styles.CreateAddressWindowScreen__inlineBlock
                    }
                >
                    <InputWithLabel
                        labelName={"Подъезд"}
                        blockClassName={
                            styles.CreateAddressWindowScreen__inputBlockClassName
                        }
                    />
                    <InputWithLabel
                        labelName={"Этаж"}
                        blockClassName={
                            styles.CreateAddressWindowScreen__inputBlockClassName
                        }
                    />
                </div>
                <InputWithLabel
                    labelName={"Квартира / офис"}
                    blockClassName={
                        styles.CreateAddressWindowScreen__inputBlockClassName_last
                    }
                />
                <div
                    className={
                        styles.CreateAddressWindowScreen__buttonBlock
                    }
                >
                    <Button
                        className={
                            styles.CreateAddressWindowScreen__button
                        }
                        onClick={() => navigate(backUrl)}
                    >
                        ок
                    </Button>
                </div>
            </section>
        </BackgroundBlackout>
    );
};

export default CreateAddressWindowScreen;
