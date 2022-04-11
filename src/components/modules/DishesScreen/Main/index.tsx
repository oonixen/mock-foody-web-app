import React from "react";
import stylesPadding from "../../../../styles/modules/PagePadding.module.scss";
import ParamBlock from "../ParamBlock";
import DishGrid from "../DishGrid";
import styles from "./style.module.scss";

const Main = () => {
    return (
        <main
            className={
                stylesPadding.PagePadding_horizontal +
                " " +
                styles.DishesScreen_Main__main
            }
        >
            <ParamBlock />
            <DishGrid />
        </main>
    );
};

export default Main;
