import React from "react";
import styles from "./style.module.scss";
import ModifierInput from "../ModifierInput";

const ModifiersBlock = () => {
    return (
        <div>
            <h3 className={styles.DishModalWindowScreen_ModifierBlock__h3}>
                Добавить
            </h3>
            <ModifierInput name={"Шампиньоны"} sum={"59"} />
            <ModifierInput name={"Ветчина"} sum={"59"} />
            <ModifierInput name={"Острый халапенью"} sum={"59"} />
        </div>
    );
};

export default ModifiersBlock;
