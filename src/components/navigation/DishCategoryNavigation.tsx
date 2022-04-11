import React from "react";
import { Routes, Route } from "react-router-dom";
import RoutePath from "../../classes/navigation/RoutePath";
import MapNavigation from "./MapNavigation";
import DishCategoryScreen from "../screens/DishCategoryScreen";
import StoryScreen from "../screens/StoryScreen";
import DishModalWindowScreen from "../screens/DishModalWindowScreen";

const DishCategoryNavigation = () => {
    return (
        <>
            <DishCategoryScreen />
            <Routes>
                <Route
                    path={`${RoutePath.getDishCategoryMapPath()}*`}
                    element={
                        <MapNavigation
                            deliveryPath={RoutePath.getDishCategoryDeliveryMapPath()}
                            pickupPath={RoutePath.getDishCategoryPickupMapPath()}
                            absoluteDeliveryPath={RoutePath.getDishCategoryDeliveryMapPath(
                                true
                            )}
                            absolutePickupPath={RoutePath.getDishCategoryPickupMapPath(
                                true
                            )}
                            back={RoutePath.getDishCategoryPath(true)}
                        />
                    }
                />
                <Route
                    path={RoutePath.getDishCategoryStoryPath()}
                    element={<StoryScreen />}
                />
                <Route
                    path={RoutePath.getDishCategoryDishPath()}
                    element={<DishModalWindowScreen />}
                />
            </Routes>
        </>
    );
};

export default DishCategoryNavigation;
