import React, { useRef } from "react";
import styles from "./styles.module.scss";
import imageFolder from "../../../../constants/imageFolder";
import { NavLink } from "react-router-dom";
import { useHandleSortBlock } from "./module";

const ParamBlock = () => {
    return (
        <section className={styles.DishesScreen_Main__block}>
            <div>
                <SortBlock className={styles.DishesScreen_Main__sortBlockLeftBlock} />
                <Tag name={"на компанию"} />
                <Tag name={"остро"} />
                <Tag name={"на двоих"} />
                <Tag name={"хит"} />
            </div>
            <SortBlock className={styles.DishesScreen_Main__sortBlockRightBlock} />
        </section>
    );
};

const Tag = ({ name }) => {
    return (
        <NavLink className={styles.DishesScreen_Main__navLink} to={""}>
            {name}
        </NavLink>
    );
};

const SortBlock = ({ className = "" }) => {
    const ref: React.MutableRefObject<any> = useRef();

    useHandleSortBlock(ref);

    return (
        <div className={styles.DishesScreen_Main__sortBlock + " " + className}>
            <button
                className={styles.DishesScreen_Main__button}
                onClick={() => (ref.current.style.display = "block")}
            >
                по цене
                <img
                    className={styles.DishesScreen_Main__arrow}
                    alt={"arrow"}
                    src={`${imageFolder}arrow.svg`}
                />
            </button>
            <div ref={ref} className={styles.DishesScreen_Main__hiddenBlock}>
                <NavLink to={""} className={styles.DishesScreen_Main__hiddenNavLink}>
                    отмена
                </NavLink>
                <NavLink to={""} className={styles.DishesScreen_Main__hiddenNavLink}>
                    дороже
                </NavLink>
                <NavLink to={""} className={styles.DishesScreen_Main__hiddenNavLink}>
                    дешевле
                </NavLink>
            </div>
        </div>
    );
};

export default ParamBlock;
