import React from "react";
import { CustomSelector } from "../CustomSelector";
import selectorStyles from "../../../styles/modules/CustomSelector.module.scss";
import styles from "./style.module.scss";
import imageFolder from "../../../constants/imageFolder";

const DishSearch = ({ inputStyle = "" }) => {
    return (
        <div className={styles.DishSearch__block}>
            <img
                className={styles.DishSearch__svg}
                alt={"magnifier"}
                src={`${imageFolder}magnifier.svg`}
            />
            <CustomSelector
                inputStyle={styles.DishSearch__input + " " + inputStyle}
                placeholder={"поиск блюда"}
                ButtonContent={Content}
                suggestionObj={{
                    action: () => [{ name: "Ролы" }, { name: "Суши" }],
                    nameParam: "name",
                }}
                buttonStyle={selectorStyles.CustomSelector__suggestionButton}
                selectButtonStyle={
                    selectorStyles.CustomSelector__suggestionButton_active
                }
                suggestionContainer={
                    selectorStyles.CustomSelector__suggestionContainer
                }
            />
        </div>
    );
};

const Content = ({ value }) => {
    return <span>{value}</span>;
};

export default DishSearch;
