import styles from "./style.module.scss";
import symbols from "../../../../constants/symbols";
import React from "react";

const ModifierInput = ({ name, sum }) => {
    return (
        <label className={styles.DishModalWindowScreen_ModifierBlock__label}>
            <div>
                <input
                    type={"radio"}
                    className={styles.DishModalWindowScreen_ModifierBlock__input}
                />
            </div>
            <p className={styles.DishModalWindowScreen_ModifierBlock__p}>
                {name}{" "}
                <span className={styles.DishModalWindowScreen_ModifierBlock__span}>
                    {`+${sum} ${symbols.ruble}`}
                </span>
            </p>
        </label>
    );
};

export default ModifierInput