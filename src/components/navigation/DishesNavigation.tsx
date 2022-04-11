import React from "react";
import DishesScreen from "../screens/DishesScreen";
import RoutePath from "../../classes/navigation/RoutePath";
import DishModalWindowScreen from "../screens/DishModalWindowScreen";
import { Route, Routes } from "react-router-dom";

const DishesNavigation = () => {
    return (
        <>
            <DishesScreen />
            <Routes>
                <Route
                    path={`${RoutePath.getDishDishesPath()}`}
                    element={<DishModalWindowScreen />}
                />
            </Routes>
        </>
    );
};

export default DishesNavigation;
