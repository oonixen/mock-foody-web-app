import React, { useState } from "react";
import styles from "./style.module.scss";
import LineInput from "../../../generics/LineInput";
import Button from "../../../generics/Button";
import Checkbox from "../../../generics/Checkbox";
import imageFolder from "../../../../constants/imageFolder";
import {sendPhone} from "./modal";

const ModalWindow = ({ close, next }) => {

    const [phone, setPhone] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    return (
        <form
            onSubmit={(e) => {
                // e.preventDefault();
                // setIsLoading(true)
                // sendPhone(phone)
                next();
            }}
            className={styles.SendCodeScreen_ModalWindow__form}
        >
            <button
                onClick={close}
                className={styles.SendCodeScreen_ModalWindow__closeButton}
            >
                <img
                    className={styles.SendCodeScreen_ModalWindow__close}
                    src={`${imageFolder}multiply.svg`}
                    alt={"close"}
                />
            </button>
            <h2 className={styles.SendCodeScreen_ModalWindow__h2}>
                Ваш номер телефона
            </h2>
            <LineInput
                className={styles.SendCodeScreen_ModalWindow__input}
                placeholder={"+7"}
                inputMask={"+7 999 999-99-99"}
                value={phone}
                onInput={(e) => setPhone(e.currentTarget.value)}
                required={true}
            />
            <Button
                type={"submit"}
                className={styles.SendCodeScreen_ModalWindow__button}
                isLoading={isLoading}
            >
                далее
            </Button>
            <Checkbox
                required={true}
                classContainer={styles.SendCodeScreen_ModalWindow__checkboxContainer}
            >
                <span className={styles.SendCodeScreen_ModalWindow__attentionText}>
                    Я соглашаюсь с{" "}
                    <a
                        className={
                            styles.SendCodeScreen_ModalWindow__attentionText +
                            " " +
                            styles.SendCodeScreen_ModalWindow__a
                        }
                        href={
                            "https://polyana.delivery/docs/PrivacyPolicyPolynaPolyanaDelivery.pdf"
                        }
                        target={"_blank"}
                    >
                        правилами пользования и сбора личной информации
                    </a>
                </span>
            </Checkbox>
        </form>
    );
};

export default ModalWindow;
