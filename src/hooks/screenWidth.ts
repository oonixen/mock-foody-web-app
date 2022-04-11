import { useEffect, useState } from "react";

export function useScreenWidth() {
    const [screenWidth, setScreenWidth] = useState(window.screen.width);
    const resizeFunc = (e) => onResize(e, setScreenWidth);

    useEffect(() => {
        window.addEventListener("resize", resizeFunc);

        return () => window.removeEventListener("resize", resizeFunc);
    }, []);

    return { width: screenWidth };
}

function onResize(e, setScreenWidth) {
    setScreenWidth(e.currentTarget.innerWidth);
}
