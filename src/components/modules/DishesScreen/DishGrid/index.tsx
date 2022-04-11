import React from "react";
import styles from "./style.module.scss";
import symbols from "../../../../constants/symbols";
import { NavLink, useParams } from "react-router-dom";
import RoutePath from "../../../../classes/navigation/RoutePath";
import RouteParams from "../../../../classes/navigation/RouteParams";
import Button from "../../../generics/Button";
import buttonColors from "../../../../constants/buttonColors";

const DishGrid = () => {
    const params = useParams();
    const categoryId = params[RouteParams.getDishCategoryId()];
    const array = Array(2).fill({});

    return (
        <section>
            {array.map((value, index) => {
                return <CategorySection key={index} categoryId={categoryId} />;
            })}
        </section>
    );
};

const CategorySection = ({ categoryId }) => {
    const array = Array(5).fill({});

    return (
        <div className={styles.DishesScreen_DishGrid__section}>
            <h4 className={styles.DishesScreen_DishGrid__h4}>Роллы</h4>
            <div className={styles.DishesScreen_DishGrid__grid}>
                {array.map((value, index) => {
                    return (
                        <Dish
                            key={index}
                            index={index}
                            categoryId={categoryId}
                        />
                    );
                })}
            </div>
        </div>
    );
};

const Dish = ({ index, categoryId }) => {
    return (
        <div className={styles.DishesScreen_DishGrid__dishBlock}>
            <NavLink to={RoutePath.getDishDishesPath(true, index, categoryId)}>
                <div className={styles.DishesScreen_DishGrid__img} />
            </NavLink>
            <p className={styles.DishesScreen_DishGrid__p}>
                Сет Инь-Янь со спайси соусом
            </p>
            <Button
                isShowIncreaseAnimation={true}
                className={styles.DishesScreen_DishGrid__button}
                color={buttonColors.inherit}
            >
                {`355 ${symbols.ruble}`}
            </Button>
        </div>
    );
};

export default DishGrid;
