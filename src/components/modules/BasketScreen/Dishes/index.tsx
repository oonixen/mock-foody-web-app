import React from "react";
import symbols from "../../../../constants/symbols";
import styles from "./style.module.scss";
import imageFolder from "../../../../constants/imageFolder";

const Dishes = () => {
    const dishesArr = Array(3).fill({});

    return (
        <div>
            <span className={styles.BasketScreen_Dishes__sum}>
                1420
                {` ${symbols.ruble}`}
            </span>
            <div className={styles.BasketScreen_Dishes__dishSection}>
                {dishesArr.map((v, i) => {
                    return <Dish key={i} />;
                })}
            </div>
        </div>
    );
};

const Dish = () => {
    return (
        <div className={styles.BasketScreen_Dishes__dishBlock}>
            <div className={styles.BasketScreen_Dishes__imgAndNameBlock}>
                <div className={styles.BasketScreen_Dishes__img} />
                <div className={styles.BasketScreen_Dishes__nameBlock}>
                    <span className={styles.BasketScreen_Dishes__name}>
                        Пицца Четыре сезона
                    </span>
                    <div
                        className={
                            styles.BasketScreen_Dishes__controlBlockAndSumSection
                        }
                    >
                        <DishPrice
                            className={
                                styles.BasketScreen_Dishes__dishPrice_alignStart
                            }
                        />
                        <ControlBlock />
                    </div>
                </div>
            </div>
            <ControlBlock className={styles.BasketScreen_Dishes__hideUnderTablet} />
            <DishPrice className={styles.BasketScreen_Dishes__hideUnderTablet} />
        </div>
    );
};

const ControlBlock = ({ className = "" }) => {
    return (
        <div className={styles.BasketScreen_Dishes__controlBlock + " " + className}>
            <button className={styles.BasketScreen_Dishes__button}>
                <img
                    className={styles.BasketScreen_Dishes__svg}
                    src={`${imageFolder}minus.svg`}
                    alt={"minus"}
                />
            </button>
            <span className={styles.BasketScreen_Dishes__count}>10</span>
            <button className={styles.BasketScreen_Dishes__button}>
                <img
                    className={styles.BasketScreen_Dishes__svg}
                    src={`${imageFolder}plus.svg`}
                    alt={"plus"}
                />
            </button>
        </div>
    );
};

const DishPrice = ({ className = "" }) => {
    return (
        <span className={styles.BasketScreen_Dishes__dishPrice + " " + className}>
            1730
            {` ${symbols.ruble}`}
        </span>
    );
};

export default Dishes;
