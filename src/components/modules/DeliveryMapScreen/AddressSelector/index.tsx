import React from "react";
import { CustomSelector } from "../../../generics/CustomSelector";
import styles from "./style.module.scss";
import Button from "../../../generics/Button";
import selectorStyles from "../../../../styles/modules/CustomSelector.module.scss";
import { useNavigate } from "react-router-dom";
import RoutePath from "../../../../classes/navigation/RoutePath";

const AddressSelector = () => {
    const navigation = useNavigate();

    const suggestions = [
        { param: "11" },
        { param: "122" },
        { param: "1332" },
        { param: "244" },
        { param: "24321" },
    ];

    return (
        <div className={styles.DeliveryMapScreen_AddressSelector__block_parent}>
            <div className={styles.DeliveryMapScreen_AddressSelector__block_child}>
                <div>
                    <CustomSelector
                        placeholder={"Введите улицу и дом"}
                        inputStyle={styles.DeliveryMapScreen_AddressSelector__input}
                        buttonStyle={
                            selectorStyles.CustomSelector__suggestionButton
                        }
                        suggestionContainer={
                            selectorStyles.CustomSelector__suggestionContainer
                        }
                        selectButtonStyle={
                            selectorStyles.CustomSelector__suggestionButton_active
                        }
                        suggestionObj={{
                            action: (query) => {
                                console.log(query);
                                return suggestions;
                            },
                            nameParam: "param",
                        }}
                        onChange={(value) => console.log(value)}
                        ButtonContent={ButtonSuggestion}
                    />
                    <span className={styles.DeliveryMapScreen_AddressSelector__span}>
                        актуальность меню зависит от адреса
                    </span>
                </div>
                <Button
                    className={styles.DeliveryMapScreen_AddressSelector__button}
                    onClick={() =>
                        navigation(RoutePath.getDishCategoryPath(true))
                    }
                >
                    ОК
                </Button>
            </div>
        </div>
    );
};

const ButtonSuggestion = ({ value }) => {
    return (
        <>
            <span
                className={
                    styles.DeliveryMapScreen_AddressSelector__buttonSuggestion_top
                }
            >
                {value}
            </span>
            <br />
            <span
                className={
                    styles.DeliveryMapScreen_AddressSelector__buttonSuggestion_bottom
                }
            >
                {value}
            </span>
        </>
    );
};

export default AddressSelector;
