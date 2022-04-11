import React, {useRef} from "react";
import {useNavigate} from "react-router";
import AnimateBlock, {animationTypes, hide, show} from "../../generics/AnimateBlock";
import RoutePath from "../../../classes/navigation/RoutePath";
import BackgroundBlackout from "../../generics/BackgroundBlackout";
import ModalWindow from "../../modules/SendCodeScreen/ModalWindow";

const SendCode = () => {

    const navigation = useNavigate();
    const animationRef = useRef();
    const animationType = animationTypes.opacity;
    const animationDuration = 300;
    const showAnimation = (element) => show(animationType, element);
    const close = () =>
        hide(
            animationType,
            animationRef.current,
            () => navigation(RoutePath.getRootPath()),
            animationDuration
        );
    const next = () => navigation(RoutePath.getCodeVerifyPath(true));

    return (
        // @ts-ignore
        <AnimateBlock
            ref={animationRef}
            showAnimation={showAnimation}
            type={animationType}
            animationDuration={animationDuration}
            preventStartAnimation={false}
        >
            <BackgroundBlackout onClick={close}>
                <ModalWindow close={close} next={next} />
            </BackgroundBlackout>
        </AnimateBlock>
    );
};

export default SendCode;
