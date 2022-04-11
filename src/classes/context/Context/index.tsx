import React, { useContext, useMemo, useReducer } from "react";
import { IInitContextState } from "./interface";

export default class Context {
    static returnContext(usersContext: React.Context<unknown>) {
        return (): any => {
            const context = useContext<any>(usersContext);
            if (!context)
                throw new Error("Index must be within ContextProvider");
            return context;
        };
    }

    static returnContextProvider(
        reducer: (state: any, action: any) => any,
        initState: IInitContextState,
        JsxProvider: React.Provider<any>,
        props: any
    ) {
        const [state, dispatch] = useReducer(reducer, initState);
        const returnState = () => [state, dispatch];
        const value = useMemo(returnState, [state]);

        return <JsxProvider value={value} {...props} />;
    }
}
