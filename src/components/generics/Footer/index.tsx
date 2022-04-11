import React from "react";
import styles from "./style.module.scss";
import imageFolder from "../../../constants/imageFolder";

const Footer = () => {
    return (
        <footer className={styles.Footer__footer}>
            <div className={styles.Footer__firstBlock}>
                <a
                    className={styles.Footer__a_first + " " + styles.Footer__a}
                    href={"mailto:mail@mail.ru"}
                >
                    <span className={`${styles.Footer__text}`}>
                        mail@mail.ru
                    </span>
                </a>
                <a href={"tel:+ 7 846 000-00-00"} className={styles.Footer__a}>
                    <span className={styles.Footer__text}>
                        + 7 846 000-00-00
                    </span>
                </a>
            </div>
            <div className={styles.Footer__secondBlock}>
                <a
                    className={styles.Footer__a_first + " " + styles.Footer__a}
                    href={"https://vk.com"}
                    target={"_blank"}
                >
                    <img
                        className={
                            `${styles.Footer__img} ` +
                            `${styles.Footer__img_vk}`
                        }
                        src={`${imageFolder}iconVK.svg`}
                        alt={"VK"}
                    />
                    <span className={`${styles.Footer__text}`}>вконтакте</span>
                </a>
                <a
                    href={"https://www.instagram.com/"}
                    target={"_blank"}
                    className={styles.Footer__a}
                >
                    <img
                        className={
                            `${styles.Footer__img} ` +
                            `${styles.Footer__img_instagram}`
                        }
                        src={`${imageFolder}iconInstagram.svg`}
                        alt={"Instagram"}
                    />
                    <span className={styles.Footer__text}>инстаграм</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
