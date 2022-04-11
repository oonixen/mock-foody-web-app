import React, { PropsWithChildren, useEffect } from "react";
import { IAnimateBlock } from "./interface";

export enum animationTypes {
    "opacity",
}

export function show(type, element) {
    switch (type) {
        case animationTypes.opacity:
            element.style.opacity = 1;
            break;
    }
}

export function hide(type, element, callback, animationDuration) {
    switch (type) {
        case animationTypes.opacity:
            element.style.opacity = 0;
            setTimeout(() => {
                callback();
            }, animationDuration);
            break;
    }
}

const AnimateBlock = React.forwardRef(
    (props: PropsWithChildren<IAnimateBlock>, ref) => {
        const {
            showAnimation = (element: React.MutableRefObject<any>) => null,
            children,
            type,
            animationDuration,
            preventStartAnimation,
        } = props;
        let style = {};

        switch (type) {
            case animationTypes.opacity:
                style = {
                    opacity: preventStartAnimation ? 1 : 0,
                    transition: `opacity ${animationDuration}ms ease-in-out`,
                };
                break;
        }

        useEffect(() => {
            //@ts-ignore
            showAnimation(ref.current);
        }, []);

        return (
            <div
                //@ts-ignore
                ref={ref}
                style={{ ...style, zIndex: 100 }}
            >
                {children}
            </div>
        );
    }
);

export default AnimateBlock;
