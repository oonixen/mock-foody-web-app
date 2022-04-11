import React from "react";
import styles from "./style.module.scss";
import paddingStyle from "../../../../styles/modules/PagePadding.module.scss";
import EditUserInfoSection from "../../../generics/EditUserInfoSection";

const Main = ({ children }) => {
    return (
        <main className={styles.ProfileScreen_main__main}>
            <section
                className={
                    styles.ProfileScreen_main__section +
                    " " +
                    styles.ProfileScreen_main__leftSection +
                    " " +
                    paddingStyle.PagePadding_horizontal
                }
            >
                {children}
            </section>
            <section
                className={
                    styles.ProfileScreen_main__section +
                    " " +
                    styles.ProfileScreen_main__rightSection +
                    " " +
                    paddingStyle.PagePadding_horizontal
                }
            >
                <EditUserInfoSection />
            </section>
        </main>
    );
};

export default Main;
