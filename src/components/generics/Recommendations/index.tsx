import symbols from "../../../constants/symbols";
import React from "react";
import styles from "./style.module.scss";
import Button from "../Button";

const Recommendations = ({ isHideTitle }) => {
    const array = Array(6).fill({});

    return (
        <>
            <h4
                className={`${styles.DishCategory_Story__h4} 
                ${isHideTitle ? styles.DishCategory_Story__h4_hide : " "}`}
            >
                Рекомендуем
            </h4>
            <div className={styles.DishCategory_Story__blockRec}>
                {array.map((value, index) => {
                    return (
                        <div
                            key={index}
                            className={styles.DishCategory_Story__dish}
                        >
                            <div className={styles.DishCategory_Story__img} />
                            <p className={styles.DishCategory_Story__dishName}>
                                Пицца Аррива
                            </p>
                            <Button
                                isShowIncreaseAnimation={true}
                                className={
                                    styles.DishCategory_Story__dishButton
                                }
                            >
                                {`1234 ${symbols.ruble}`}
                            </Button>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Recommendations;
