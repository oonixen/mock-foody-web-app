import React from "react";
import { Routes, Route } from "react-router-dom";
import RoutePath from "../../classes/navigation/RoutePath";
import DishCategoryNavigation from "./DishCategoryNavigation";
import DishesNavigation from "./DishesNavigation";

const MenuNavigation = () => {
    return (
        <Routes>
            <Route
                path={`${RoutePath.getDishCategoryPath()}*`}
                element={<DishCategoryNavigation />}
            />
            <Route
                path={`${RoutePath.getDishesPath()}*`}
                element={<DishesNavigation />}
            />
        </Routes>
    );
};

export default MenuNavigation;
