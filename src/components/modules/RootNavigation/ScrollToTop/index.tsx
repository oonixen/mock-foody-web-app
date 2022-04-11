import React from "react";
import { useScrollToTopHandler } from "./model";

const ScrollToTop = ({ children }) => {
    useScrollToTopHandler();

    return <>{children}</>;
};

export default ScrollToTop;
