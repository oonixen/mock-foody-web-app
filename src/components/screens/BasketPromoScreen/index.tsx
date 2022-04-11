import React from "react";
import BackgroundBlackout from "../../generics/BackgroundBlackout";
import {useNavigate} from "react-router-dom";
import RoutePath from "../../../classes/navigation/RoutePath";
import styles from "./style.module.scss"
import Button from "../../generics/Button";

const BasketPromoScreen = () => {

    const navigate = useNavigate()

    return (
        <BackgroundBlackout
            onClick={() => navigate(RoutePath.getBasketPath(true))}
            isShowCloseButton={true}
        >
            <div
                className={styles.BasketPromoScreen__block}
            >
                <span
                    className={styles.BasketPromoScreen__text}
                >
                    Введите промокод
                </span>
                <input
                    className={styles.BasketPromoScreen__input}
                />
                <Button
                    className={styles.BasketPromoScreen__button}
                >
                    применить
                </Button>
            </div>
        </BackgroundBlackout>
    )
}

export default BasketPromoScreen