import React, {useState} from "react";
import styles from "./style.module.scss"
import imageFolder from "../../../../constants/imageFolder";

const Ingredient = ({isComma = false}) => {

    const [isDeleted, setIsDeleted] = useState(false)

    return (
        <button
            onClick={() => setIsDeleted(!isDeleted)}
            className={styles.DishModalWindowScreen_Ingredient__button}
        >
            {" "}
            <span
                className={
                    isDeleted ?
                        styles.DishModalWindowScreen_Ingredient__span_deleted
                        :
                        styles.DishModalWindowScreen_Ingredient__span_notDeleted}
            >
                помидоры
            </span>
            {" "}
            <img
                className={styles.DishModalWindowScreen_Ingredient__svg}
                alt={"sign"}
                src={`${imageFolder}${isDeleted ? "sign_reestablish.svg" : "sign_remove.svg"}`}
            />
            {isComma ? ",": ""}
        </button>
    )
}

export default Ingredient