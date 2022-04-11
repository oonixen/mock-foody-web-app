import styles from "./style.module.scss";
import React from "react";

const DishInfoSubsection = ({ name, amount }) => {
    return (
        <div className={styles.DishModalWindowScreen_DishInfoSubsection__DishInfoSubsection}>
            <p>{name}</p>
            <p
                className={
                    styles.DishModalWindowScreen_DishInfoSubsection__DishInfoSubsectionAmount
                }
            >
                {amount}
            </p>
        </div>
    );
};

export default DishInfoSubsection