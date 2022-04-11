import { ReactElement } from "react";
import { animationTypes } from "./index";

export interface IAnimateBlock {
    showAnimation: (element) => any;
    children: ReactElement<any, any>;
    type: animationTypes;
    animationDuration: number;
    preventStartAnimation: boolean;
}
