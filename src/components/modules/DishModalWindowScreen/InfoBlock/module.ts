import { useEffect } from "react";

export function useHideInfoBlock(idAllergicBlock, idInfoBlock) {
    useEffect(() => {
        const allergicBlock = document.getElementById(idAllergicBlock);
        const infoBlock = document.getElementById(idInfoBlock);
        const eventHideAllergic = () => hideElem(allergicBlock);
        const eventHideInfo = () => hideElem(infoBlock);

        document.body.addEventListener("click", eventHideAllergic, true);
        document.body.addEventListener("click", eventHideInfo, true);

        return () => {
            document.body.removeEventListener("click", eventHideAllergic, true);
            document.body.removeEventListener("click", eventHideInfo, true);
        };
    }, []);
}

export function showBlock(id) {
    const elem = document.getElementById(id);

    elem.style.display = "block";
}

function hideElem(elem) {
    if (!elem || elem.style.display !== "block") return;

    elem.style.display = "none";
}
