import React, { createContext } from "react";
import Context from "../classes/context/Context";

export interface ITestContextObject {
    count: number;
}
interface ITestContextTypes {
    setCount: String;
}
interface ITestContextAction {
    type: String;
    payload: ITestContextObject;
}

const TestContext: React.Context<unknown> = createContext("");
const types: ITestContextTypes = {
    setCount: "SET_COUNT",
};
const initState: ITestContextObject = {
    count: 0,
};
const reducer = (state: ITestContextObject, action: ITestContextAction) => {
    switch (action.type) {
        case types.setCount:
            return { ...state, count: state.count + 1 };
        default:
            return state;
    }
};

export const useTestContext = Context.returnContext(TestContext);
export const TestContextProvider = (props: any): React.ReactElement => {
    return Context.returnContextProvider(
        reducer,
        initState,
        TestContext.Provider,
        props
    );
};
export const increaseCounter = (dispatch: React.Dispatch<any>) => {
    dispatch({
        type: types.setCount,
    });
};
