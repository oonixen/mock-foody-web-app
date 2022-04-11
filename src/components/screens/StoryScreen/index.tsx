import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import RouteParams from "../../../classes/navigation/RouteParams";
import RoutePath from "../../../classes/navigation/RoutePath";
import BackgroundBlackout from "../../generics/BackgroundBlackout";
import styles from "./style.module.scss";
import imageFolder from "../../../constants/imageFolder";
import scrollbarStyle from "../../../styles/modules/CustomScrollbar.module.scss";
import Recommendations from "../../generics/Recommendations";

const StoryScreen = () => {
    
    const navigation = useNavigate();
    const params = useParams();
    const id = params[RouteParams.getStoryId()];
    const hide = () => navigation(RoutePath.getDishCategoryPath(true));

    return (
        <BackgroundBlackout onClick={hide}>
            <div className={styles.StoryScreen__section_parent}>
                <button
                    className={
                        styles.StoryScreen__arrow +
                        " " +
                        styles.StoryScreen__arrow_right
                    }
                >
                    <img
                        className={styles.StoryScreen__arrow_img}
                        src={`${imageFolder}arrow_white.svg`}
                        alt={"arrow"}
                    />
                </button>
                <button
                    className={
                        styles.StoryScreen__arrow +
                        " " +
                        styles.StoryScreen__arrow_left
                    }
                >
                    <img
                        className={styles.StoryScreen__arrow_img}
                        src={`${imageFolder}arrow_white.svg`}
                        alt={"arrow"}
                    />
                </button>
                <section
                    className={
                        styles.StoryScreen__section +
                        " " +
                        scrollbarStyle.CustomScrollbar__scrollbar
                    }
                >
                    <button
                        onClick={hide}
                        className={
                            styles.StoryScreen__closeButton_button
                        }
                    >
                        <img
                            className={
                                styles.StoryScreen__closeButton_img
                            }
                            src={`${imageFolder}multiply.svg`}
                            alt={"close"}
                        />
                    </button>
                    <div className={styles.StoryScreen__bannerBlock} />
                    <div className={styles.StoryScreen__contentBlock}>
                        <h3 className={styles.StoryScreen__h3}>
                            Скидка на пиццы каждый день {id}
                        </h3>
                        <p className={styles.StoryScreen__p}>
                            Пицца с сырокопчеными колбасками пепперони,
                            помидорами, маслинами, сушеными базиликом и орегано,
                            каперсами, сыром моцарелла и томатным соусом
                            помадоро сушеными базиликом и орегано, каперсами,
                            сыром моцарелла
                        </p>
                        <p className={styles.StoryScreen__date}>
                            Действует до 17.02.2022
                        </p>
                        <Recommendations isHideTitle={true} />
                    </div>
                </section>
            </div>
        </BackgroundBlackout>
    );
};

export default StoryScreen;
