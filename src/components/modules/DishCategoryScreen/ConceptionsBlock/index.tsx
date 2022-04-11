import React from "react";
import styles from "./style.module.scss";
import symbols from "../../../../constants/symbols";
import { NavLink } from "react-router-dom";
import imageFolder from "../../../../constants/imageFolder";
import RoutePath from "../../../../classes/navigation/RoutePath";
import Button from "../../../generics/Button";
import buttonColors from "../../../../constants/buttonColors";

const ConceptionsBlock = () => {
    const array = Array(2).fill({});

    return (
        <section>
            {array.map((value, index) => {
                return <ConceptSection key={index} index={index} />;
            })}
        </section>
    );
};

const ConceptSection = ({ index }) => {
    const linkTo = RoutePath.getDishesPath(true, index);

    return (
        <div className={styles.DishCategoryScreen_ConceptionsBlock__categoryWrapper}>
            <div
                className={styles.DishCategoryScreen_ConceptionsBlock__categoryBlock}
            >
                <div
                    className={
                        styles.DishCategoryScreen_ConceptionsBlock__topCategoryBlock
                    }
                >
                    <p
                        className={
                            styles.DishCategoryScreen_ConceptionsBlock__topCategoryName
                        }
                    >
                        Паназия
                    </p>
                    <NavLink
                        className={
                            styles.DishCategoryScreen_ConceptionsBlock__topNavLink
                        }
                        to={linkTo}
                    >
                        все{" "}
                        <img
                            className={
                                styles.DishCategoryScreen_ConceptionsBlock__topArrow
                            }
                            src={`${imageFolder}arrow_black.svg`}
                            alt={"arrow"}
                        />
                    </NavLink>
                </div>
                <div
                    className={
                        styles.DishCategoryScreen_ConceptionsBlock__dishesBlock
                    }
                >
                    {Array(3)
                        .fill({})
                        .map((v, i) => {
                            return <Dish key={i} id={i} />;
                        })}
                </div>
            </div>
            <NavLink
                to={linkTo}
                className={styles.DishCategoryScreen_ConceptionsBlock__navLink}
            >
                <p
                    className={
                        styles.DishCategoryScreen_ConceptionsBlock__categoryName
                    }
                >
                    Паназия
                </p>
                <div
                    className={styles.DishCategoryScreen_ConceptionsBlock__arrowBlock}
                >
                    <p
                        className={
                            styles.DishCategoryScreen_ConceptionsBlock__arrowText
                        }
                    >
                        все{" "}
                    </p>
                    <img
                        className={
                            styles.DishCategoryScreen_ConceptionsBlock__arrowImg
                        }
                        src={`${imageFolder}arrow_black.svg`}
                        alt={"arrow"}
                    />
                </div>
            </NavLink>
        </div>
    );
};

const Dish = ({ id }) => {
    return (
        <div className={styles.DishCategoryScreen_ConceptionsBlock__dishBlock}>
            <NavLink
                to={RoutePath.getDishCategoryDishPath(true, id)}
                className={styles.DishCategoryScreen_ConceptionsBlock__img}
            >
                {null}
            </NavLink>
            <div
                className={styles.DishCategoryScreen_ConceptionsBlock__dishInfoBlock}
            >
                <p className={styles.DishCategoryScreen_ConceptionsBlock__name}>
                    Ролл Калифорния с лососем
                </p>
                <Button
                    color={buttonColors.purpleLight}
                    className={
                        styles.DishCategoryScreen_ConceptionsBlock__addDishButton
                    }
                    isShowIncreaseAnimation={true}
                >
                    {`1233 ${symbols.ruble}`}
                </Button>
            </div>
        </div>
    );
};

export default ConceptionsBlock;
