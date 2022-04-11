import React from "react";
import imageFolder from "../../../../constants/imageFolder";
import styles from "./style.module.scss";
import ModifiersBlock from "../ModifiersBlock";
import Recommendations from "../../../generics/Recommendations";
import scrollStyle from "../../../../styles/modules/CustomScrollbar.module.scss";
import { showBlock, useHideInfoBlock } from "./module";
import Ingredient from "../Ingredient";

const InfoBlock = ({ id, idDishInfo, idDishAllergic }) => {

    useHideInfoBlock(idDishAllergic, idDishInfo);
    const ingredients = Array(3).fill({})
    const ingredientsLength = ingredients.length

    return (
        <div
            className={
                styles.DishModalWindowScreen_InfoBlock__block +
                " " +
                scrollStyle.CustomScrollbar__scrollbar
            }
        >
            <div className={styles.DishModalWindowScreen_InfoBlock__infoBlock}>
                <button onClick={() => showBlock(idDishInfo)}>
                    <img
                        className={styles.DishModalWindowScreen_InfoBlock__infoButton}
                        src={`${imageFolder}exclamationMark.svg`}
                        alt={"info"}
                    />
                </button>
                <button
                    className={styles.DishModalWindowScreen_InfoBlock__allergicButton}
                    onClick={() => showBlock(idDishAllergic)}
                >
                    показать аллергены
                </button>
            </div>
            <p className={styles.DishModalWindowScreen_InfoBlock__name}>
                Пицца Микс{" "}
                <span className={styles.DishModalWindowScreen_InfoBlock__weight}>
                    300г
                </span>
            </p>
            <p className={styles.DishModalWindowScreen_InfoBlock__description}>
                Сырокопченые колбаски пепперони, помидоры, маслины, сушеный
                базилик, орегано, каперсы,
                {
                    ingredients.map((v, i)  => {
                        return (
                            <Ingredient key={i} isComma={i+1 !== ingredientsLength}/>
                        )
                    })
                }
            </p>
            <ModifiersBlock />
            <Recommendations isHideTitle={false} />
        </div>
    );
};

export default InfoBlock;
