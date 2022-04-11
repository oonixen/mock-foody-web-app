import { useEffect } from "react";

export function useFixBottomHeaderBlock(ref, topBlockRef) {
    const event = () => onScroll(ref, topBlockRef);

    useEffect(() => {
        window.addEventListener("scroll", event);

        return () => {
            window.removeEventListener("scroll", event);
        };
    }, []);

    event();
}

function onScroll(ref, topBlockRef) {
    const topBlockHeight = topBlockRef.current?.clientHeight;
    const elem = ref.current;

    if (!elem) return;
    else if (window.scrollY <= topBlockHeight) {
        elem.style.position = "initial";
        elem.style.borderRadius = "16px 16px 0 0";
    } else {
        elem.style.position = "fixed";
        elem.style.top = 0;
        elem.style.left = 0;
        elem.style.right = 0;
        elem.style.borderRadius = "0";
    }
}
