import React from "react";
import styles from "./style.module.scss";
import Stories from "../Stories";
import stylesPadding from "../../../../styles/modules/PagePadding.module.scss";
import ConceptionsBlock from "../ConceptionsBlock";

const Main = () => {
    return (
        <main
            className={
                styles.DishCategoryScreen_Main__main +
                " " +
                stylesPadding.PagePadding_horizontal
            }
        >
            <Stories />
            <ConceptionsBlock />
        </main>
    );
};

export default Main;
