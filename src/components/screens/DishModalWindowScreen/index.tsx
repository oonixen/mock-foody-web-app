import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import RouteParams from "../../../classes/navigation/RouteParams";
import BackgroundBlackout from "../../generics/BackgroundBlackout";
import styles from "./style.module.scss";
import imageFolder from "../../../constants/imageFolder";
import DishInfoSubsection from "../../modules/DishModalWindowScreen/DishInfoSubsection";
import InfoBlock from "../../modules/DishModalWindowScreen/InfoBlock";
import symbols from "../../../constants/symbols";
import Button from "../../generics/Button";

const DishModalWindowScreen = () => {
    
    const navigation = useNavigate();
    const params = useParams();
    const [isPackedPresent, setIsPackedPresent] = useState(false)
    const id = params[RouteParams.getDishId()];
    const close = () => navigation("../");
    const idDishInfo = "ModalWindow__dishInfo";
    const idDishAllergic = "ModalWindow__dishAllergic";

    return (
        <BackgroundBlackout
            onClick={close}
            isShowCloseButton={true}
        >
            <section className={styles.DishModalWindowScreen__section}>
                <button
                    onClick={() => setIsPackedPresent(!isPackedPresent)}
                    className={styles.DishModalWindowScreen__presentButton}
                >
                    <img
                        className={styles.DishModalWindowScreen__presentSvg}
                        alt={"present"}
                        src={`${imageFolder}${isPackedPresent ? "present_packed.svg" : "present_toPack.svg"}`}
                    />
                </button>
                <div
                    className={styles.DishModalWindowScreen__overflowBlock}
                >
                    <div className={styles.DishModalWindowScreen__imgBlock}>
                        <div
                            style={{ display: "none" }}
                            id={idDishInfo}
                            className={`${styles.DishModalWindowScreen__dishModalBlock} 
                            ${styles.DishModalWindowScreen__dishInfoBlock_parent}`}
                        >
                            <div
                                className={
                                    styles.DishModalWindowScreen__dishInfoBlock
                                }
                            >
                                <DishInfoSubsection name={"Ккал"} amount={"267"} />
                                <DishInfoSubsection
                                    name={"Белки"}
                                    amount={"10,7 г"}
                                />
                                <DishInfoSubsection
                                    name={"Жиры"}
                                    amount={"12,7 г"}
                                />
                                <DishInfoSubsection
                                    name={"Углеводы"}
                                    amount={"26,5 г"}
                                />
                            </div>
                        </div>
                        <div
                            style={{ display: "none" }}
                            id={idDishAllergic}
                            className={`${styles.DishModalWindowScreen__dishModalBlock} 
                                ${styles.DishModalWindowScreen__dishAllergicBlock}`}
                        >
                            <p
                                className={
                                    styles.DishModalWindowScreen__allergicName
                                }
                            >
                                Аллергены
                            </p>
                            <p>каперсы, сыр моцарелла, красный перец</p>
                        </div>
                    </div>
                    <div className={styles.DishModalWindowScreen__infoBlock}>
                        <InfoBlock
                            id={id}
                            idDishInfo={idDishInfo}
                            idDishAllergic={idDishAllergic}
                        />
                        <div
                            className={
                                styles.DishModalWindowScreen__bottomBlock
                            }
                        >
                            <div
                                className={
                                    styles.DishModalWindowScreen__shadowBlock
                                }
                            />
                            <Button
                                isShowIncreaseAnimation={true}
                                className={
                                    styles.DishModalWindowScreen__addButton
                                }
                            >
                                {`добавить за 355 ${symbols.ruble}`}
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </BackgroundBlackout>
    );
};

export default DishModalWindowScreen;
