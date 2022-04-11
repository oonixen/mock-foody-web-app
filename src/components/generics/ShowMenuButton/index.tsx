import React, { useState } from "react";
import imageFolder from "../../../constants/imageFolder";
import styles from "./style.module.scss";
import BackgroundBlackout from "../BackgroundBlackout";
import { NavLink } from "react-router-dom";

const ShowMenuButton = ({ className = "" }) => {
    const [isShowMenu, setIsShowMenu] = useState(false);

    return (
        <div className={styles.ShowMenuButton__block + " " + className}>
            <button
                className={styles.ShowMenuButton__button}
                onClick={() => setIsShowMenu(true)}
            >
                <img
                    className={styles.ShowMenuButton__img}
                    src={`${imageFolder}bar.svg`}
                    alt={"bar"}
                />
                <span className={styles.ShowMenuButton__span}>меню</span>
            </button>
            {isShowMenu ? <MenuBlock setIsShowMenu={setIsShowMenu} /> : null}
        </div>
    );
};

const MenuBlock = ({ setIsShowMenu }) => {
    return (
        <>
            <BackgroundBlackout onClick={() => setIsShowMenu(false)} />
            <nav className={styles.ShowMenuButton__nav}>
                <p className={styles.ShowMenuButton__title}>Паназия</p>
                <li className={styles.ShowMenuButton__li}>
                    <NavLink className={styles.ShowMenuButton__a} to={""}>
                        Роллы
                    </NavLink>
                </li>
                <li className={styles.ShowMenuButton__li}>
                    <NavLink className={styles.ShowMenuButton__a} to={""}>
                        Запечённые роллы
                    </NavLink>
                </li>
                <li className={styles.ShowMenuButton__li}>
                    <NavLink className={styles.ShowMenuButton__a} to={""}>
                        Классические роллы
                    </NavLink>
                </li>

                <p className={styles.ShowMenuButton__title}>Паназия</p>
                <li className={styles.ShowMenuButton__li}>
                    <NavLink className={styles.ShowMenuButton__a} to={""}>
                        Роллы
                    </NavLink>
                </li>
                <li className={styles.ShowMenuButton__li}>
                    <NavLink className={styles.ShowMenuButton__a} to={""}>
                        Запечённые роллы
                    </NavLink>
                </li>
                <li className={styles.ShowMenuButton__li}>
                    <NavLink className={styles.ShowMenuButton__a} to={""}>
                        Классические роллы
                    </NavLink>
                </li>

                <p className={styles.ShowMenuButton__title}>Паназия</p>
                <li className={styles.ShowMenuButton__li}>
                    <NavLink className={styles.ShowMenuButton__a} to={""}>
                        Роллы
                    </NavLink>
                </li>
                <li className={styles.ShowMenuButton__li}>
                    <NavLink className={styles.ShowMenuButton__a} to={""}>
                        Запечённые роллы
                    </NavLink>
                </li>
                <li className={styles.ShowMenuButton__li}>
                    <NavLink className={styles.ShowMenuButton__a} to={""}>
                        Классические роллы
                    </NavLink>
                </li>
            </nav>
        </>
    );
};

export default ShowMenuButton;
