import React from "react";
import styles from "./style.module.scss";
import imageFolder from "../../../../constants/imageFolder";
import CodeInput from "../CodeInput";
import Button from "../../../generics/Button";

const ModalWindow = ({ close }) => {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
            }}
            className={styles.CodeVerifyScreen_ModalWindow__form}
        >
            <button onClick={close}>
                <img
                    className={styles.CodeVerifyScreen_ModalWindow__close}
                    src={`${imageFolder}multiply.svg`}
                    alt={"close"}
                />
            </button>
            <h2 className={styles.CodeVerifyScreen_ModalWindow__h2}>Код из смс</h2>
            <CodeInput />
            <Button className={styles.CodeVerifyScreen_ModalWindow__button}>
                получить новый код
            </Button>
        </form>
    );
};

export default ModalWindow;
