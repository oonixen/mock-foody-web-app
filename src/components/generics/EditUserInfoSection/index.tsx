import React from "react";
import styles from "./style.module.scss";
import InputWithLabel from "../InputWithLabel";
import Toggle from "../Toggle";
import MainUserInfoSection from "../MainUserInfoSection";
import Button from "../Button";
import buttonColors from "../../../constants/buttonColors";

const EditUserInfoSection = ({isSmallScreen = false}) => {
    return (
        <div>
            {
                !isSmallScreen ? <MainUserInfoSection /> : null
            }
            <InputWithLabel
                blockClassName={styles.EditProfile__blockInput}
                inputClassName={styles.EditProfile__input}
                labelName={"Имя"}
            />
            <InputWithLabel
                getInputComponent={(className) => (
                    <input className={className} type={"date"} />
                )}
                blockClassName={styles.EditProfile__blockInput}
                inputClassName={styles.EditProfile__input}
                labelName={"Дата рождения"}
            />
            <InputWithLabel
                blockClassName={styles.EditProfile__blockInput}
                inputClassName={styles.EditProfile__input}
                labelName={"Эл. почта"}
            />
            <ChooseGenderBlock />
            <LabeledBlock name={"Дети"}>
                <Toggle id={"isThereChildren"} />
            </LabeledBlock>
            <LabeledBlock name={"Домашние питомцы"}>
                <Toggle id={"isTherePets"} />
            </LabeledBlock>
            {
                !isSmallScreen ?
                    <div className={styles.EditProfile__exitBlock}>
                        <Button className={styles.EditProfile__exitButton} color={buttonColors.inherit}>
                            <span>выйти</span>
                        </Button>
                    </div>
                    :
                    null
            }
        </div>
    );
};

const LabeledBlock = ({ name, children }) => {
    return (
        <div className={styles.EditProfile__labeledBlock}>
            <span className={styles.EditProfile__labeledBlockSpan}>{name}</span>
            {children}
        </div>
    );
};

const ChooseGenderBlock = () => {
    return (
        <LabeledBlock name={"Пол"}>
            {
                <>
                    <input
                        className={styles.EditProfile__inputRadio}
                        type="radio"
                        id="radioButton1"
                        name={"radioButton"}
                    />
                    <label
                        className={styles.EditProfile__genderLabel}
                        htmlFor={"radioButton1"}
                    >
                        М
                    </label>
                    <input
                        className={styles.EditProfile__inputRadio}
                        type="radio"
                        id="radioButton2"
                        name={"radioButton"}
                    />
                    <label
                        className={styles.EditProfile__genderLabel}
                        htmlFor={"radioButton2"}
                    >
                        Ж
                    </label>
                </>
            }
        </LabeledBlock>
    );
};

export default EditUserInfoSection;
