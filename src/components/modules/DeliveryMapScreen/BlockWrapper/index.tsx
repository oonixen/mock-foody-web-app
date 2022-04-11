import React from "react";
import styles from "./style.module.scss";

const BlockWrapper = ({ children }) => {
    return (
        <div className={styles.DeliveryMapScreen_BlockWrapper__block}>{children}</div>
    );
};

export default BlockWrapper;
