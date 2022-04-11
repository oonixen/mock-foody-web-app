import buttonColors from "../../../constants/buttonColors";
import styles from "./style.module.scss"
import {Random} from "../../../classes/math/Random";

export function getButtonColor (color) {

    let answer = styles.Button__button_purpleMedium

    switch (color) {
        case buttonColors.purpleLight:
            answer = styles.Button__button_purpleLight
            break
        case buttonColors.inherit:
            answer = styles.Button__button_inherit
            break
    }

    return answer
}

export function concatButtonAnimationElement (buttonRef) {

    const elem = document.createElement("div")

    elem.textContent = "+1"
    elem.classList.add(styles.Button__button_increaseAnimation)
    elem.style.right = Random.getRandomInt(15) + "px"

    buttonRef.current.append(elem)

    // setTimeout(() => elem.remove(), 900)
}