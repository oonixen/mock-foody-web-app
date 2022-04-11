import { useEffect } from "react";

export function subscribeMopedAction(mopedRef) {
    const event = () => actionMoped(mopedRef);

    useEffect(() => {
        window.addEventListener("scroll", event);

        return () => {
            window.removeEventListener("scroll", event);
        };
    });
}

function actionMoped(mopedRef) {
    let divider = 2;
    const elem = mopedRef.current;

    if (!elem) return;
    if (window.screen.width < 603) divider = 4;
    elem.style.left = `${window.scrollY / divider}px`;
}
