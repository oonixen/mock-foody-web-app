import React from "react";
import RootNavigation from "./components/navigation";
import ContextWrapper from "./ContextWrapper";
import AppInitialization from "./AppInitialization";
import Loader from "./Loader";

const App = () => {
    return (
        <ContextWrapper>
            <AppInitialization />
            <Loader>
                <RootNavigation />
            </Loader>
        </ContextWrapper>
    );
};

export default App;
