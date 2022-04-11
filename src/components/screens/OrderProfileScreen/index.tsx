import React from "react";
import BackgroundBlackout from "../../generics/BackgroundBlackout";
import {useNavigate} from "react-router-dom";
import RoutePath from "../../../classes/navigation/RoutePath";
import styles from "./style.module.scss"
import scrollbarStyle from "../../../styles/modules/CustomScrollbar.module.scss"
import Dish from "../../modules/OrderProfileScreen/Dish";
import symbols from "../../../constants/symbols";
import Button from "../../generics/Button";

const OrderProfileScreen = () => {

    const navigate = useNavigate()
    const dishes = Array(4).fill({})

    return (
        <BackgroundBlackout
            isShowCloseButton={true}
            onClick={() => navigate(RoutePath.getOrdersProfilePath(true))}
        >
            <section
                className={styles.OrderProfileScreen__section}
            >
                <span
                    className={styles.OrderProfileScreen__number}
                >
                    № 1526
                </span>
                <span
                    className={styles.OrderProfileScreen__date}
                >
                    Доставили 4 дек 2021, 16:46
                </span>
                <div
                    className={styles.OrderProfileScreen__dishBlock + " " + scrollbarStyle.CustomScrollbar__scrollbar}
                >
                    {
                        dishes.map((v,i) => {
                            return (
                                <Dish
                                    key={i}
                                />
                            )
                        })
                    }
                </div>
                <span
                    className={styles.OrderProfileScreen__sum}
                >
                    {`2065 ${symbols.ruble}`}
                </span>
                <div
                    className={styles.OrderProfileScreen__buttonBlock}
                >
                    <Button>
                        повторить
                    </Button>
                </div>
            </section>
        </BackgroundBlackout>
    )
}

export default OrderProfileScreen