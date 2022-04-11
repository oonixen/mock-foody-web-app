import { useEffect } from "react";

export function useHandleSortBlock(blockRef) {
    useEffect(() => {
        const elem = blockRef.current;
        const funcHide = () => hide(elem);

        document.body.addEventListener("click", funcHide, true);

        return () => document.body.removeEventListener("click", funcHide, true);
    }, []);
}

function hide(elem) {
    elem.style.display = "none";
}
