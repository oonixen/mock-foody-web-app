import React from "react";
import Switcher from "../../modules/ProfilePreferencesScreen/Switcher";
import InputWithLabel from "../../generics/InputWithLabel";
import styles from "./style.module.scss";

const ProfilePreferencesScreen = () => {

    return (
        <>
            <Switcher
                text={"Я не ем острое"}
            />
            <Switcher
                text={"Я вегетарианец"}
            />
            <InputWithLabel
                placeholder={"Например: рыба, орехи..."}
                blockClassName={styles.ProfilePreferencesScreen__inputBlock}
                labelName={"Еще кое-что не ем"}
            />
            <InputWithLabel
                placeholder={"Например: рыба, орехи..."}
                blockClassName={styles.ProfilePreferencesScreen__inputBlock}
                labelName={"У меня аллергия"}
            />
        </>
    )
}

export default ProfilePreferencesScreen