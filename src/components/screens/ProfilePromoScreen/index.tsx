import React from "react";
import styles from "./style.module.scss"
import Button from "../../generics/Button";

const ProfilePromoScreen = () => {
    return (
        <div
            className={styles.ProfilePromoScreen__block}
        >
            <span
                className={styles.ProfilePromoScreen__text}
            >
                Введите промокод
            </span>
            <input
                className={styles.ProfilePromoScreen__input}
            />
            <Button
                className={styles.ProfilePromoScreen__button}
            >
                применить
            </Button>
        </div>
    )
}

export default ProfilePromoScreen