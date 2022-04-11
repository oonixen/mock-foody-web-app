import React, { LegacyRef, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import imageFolder from "../../../../constants/imageFolder";
import { nextStoryMin } from "./module";
import { NavLink } from "react-router-dom";
import RoutePath from "../../../../classes/navigation/RoutePath";

const Stories = () => {
    const array = Array(7).fill({});
    const refScrollBlock: LegacyRef<HTMLDivElement> = useRef();
    const refLeftButton = useRef();
    const refRightButton = useRef();

    useEffect(() => {
        const leftButton: HTMLElement = refLeftButton.current;
        const rightButton: HTMLElement = refRightButton.current;

        if (refScrollBlock.current.scrollLeft === 0)
            leftButton.style.display = "none";
        if (array.length <= 5) rightButton.style.display = "none";
    }, []);

    return (
        <section className={styles.DishCategoryScreen_Stories__block_parent}>
            <div
                className={styles.DishCategoryScreen_Stories__block}
                ref={refScrollBlock}
            >
                {array.map((e, i) => {
                    return <StoryMin key={i} storyId={i} />;
                })}
            </div>
            <button
                ref={refLeftButton}
                onClick={() =>
                    nextStoryMin(
                        refScrollBlock.current,
                        styles.DishCategoryScreen_Stories__StoryMin_button,
                        false,
                        refLeftButton,
                        refRightButton
                    )
                }
                className={
                    styles.DishCategoryScreen_Stories__button +
                    " " +
                    styles.DishCategoryScreen_Stories__button_left
                }
            >
                <img
                    className={
                        styles.DishCategoryScreen_Stories__arrowSvg +
                        " " +
                        styles.DishCategoryScreen_Stories__arrowSvg_left
                    }
                    src={`${imageFolder}arrow.svg`}
                    alt={"arrow"}
                />
            </button>
            <button
                ref={refRightButton}
                onClick={() =>
                    nextStoryMin(
                        refScrollBlock.current,
                        styles.DishCategoryScreen_Stories__StoryMin_button,
                        true,
                        refLeftButton,
                        refRightButton
                    )
                }
                className={
                    styles.DishCategoryScreen_Stories__button +
                    " " +
                    styles.DishCategoryScreen_Stories__button_right
                }
            >
                <img
                    className={styles.DishCategoryScreen_Stories__arrowSvg}
                    src={`${imageFolder}arrow.svg`}
                    alt={"arrow"}
                />
            </button>
        </section>
    );
};

const StoryMin = ({ storyId }) => {
    return (
        <NavLink
            to={RoutePath.getDishCategoryStoryPath(true, storyId)}
            className={styles.DishCategoryScreen_Stories__StoryMin_button}
        >
            <div className={styles.DishCategoryScreen_Stories__StoryMin_innerBlock}>
                <p className={styles.DishCategoryScreen_Stories__StoryMin_p}>
                    Скидка на пиццы каждый день
                    {storyId}
                </p>
            </div>
        </NavLink>
    );
};

export default Stories;
