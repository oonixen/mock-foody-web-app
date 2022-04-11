import React from "react";
import styles from "./style.module.scss";
import Dishes from "../Dishes";
import stylesPadding from "../../../../styles/modules/PagePadding.module.scss";
import Recommendations from "../Recommendations";
import Registration from "../Registration";

const Main = () => {
    return (
        <main className={styles.BasketScreen_Main__main}>
            <section
                className={
                    styles.BasketScreen_Main__leftSection +
                    " " +
                    stylesPadding.PagePadding_horizontal
                }
            >
                <Dishes />
                <Recommendations />
            </section>
            <section
                className={
                    styles.BasketScreen_Main__rightSection +
                    " " +
                    stylesPadding.PagePadding_horizontal
                }
            >
                <Registration />
            </section>
        </main>
    );
};

export default Main;
