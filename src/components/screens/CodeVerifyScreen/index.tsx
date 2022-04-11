import React, {useRef} from "react";
import {useNavigate} from "react-router";
import AnimateBlock, {animationTypes, hide} from "../../generics/AnimateBlock";
import RoutePath from "../../../classes/navigation/RoutePath";
import BackgroundBlackout from "../../generics/BackgroundBlackout";
import ModalWindow from "../../modules/CodeVerifyScreen/ModalWindow";

const CodeVerify = () => {

    const navigation = useNavigate();
    const animationRef = useRef();
    const animationType = animationTypes.opacity;
    const animationDuration = 300;
    const close = () =>
        hide(
            animationType,
            animationRef.current,
            () => navigation(RoutePath.getRootPath()),
            animationDuration
        );

    return (
        //@ts-ignore
        <AnimateBlock
            ref={animationRef}
            type={animationType}
            animationDuration={animationDuration}
            preventStartAnimation={true}
        >
            <BackgroundBlackout onClick={close}>
                <ModalWindow close={close} />
            </BackgroundBlackout>
        </AnimateBlock>
    );
};

export default CodeVerify;
