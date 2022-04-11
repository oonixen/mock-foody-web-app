import React from "react";
import symbols from "../../../../constants/symbols";
import styles from "./style.module.scss"

const Dish = () => {
    return (
        <div
            className={styles.OrderProfileScreen_Dish__block}
        >
            <div
                className={styles.OrderProfileScreen_Dish__imgBlock}
            />
            <span
                className={styles.OrderProfileScreen_Dish__name}
            >
                Пицца Песто
            </span>
            <span
                className={styles.OrderProfileScreen_Dish__count}
            >
                x10
            </span>
            <span
                className={styles.OrderProfileScreen_Dish__sum}
            >
                {`11355 ${symbols.ruble}`}
            </span>
        </div>
    )
}

export default Dish