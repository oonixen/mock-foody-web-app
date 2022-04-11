import { useLocation } from "react-router-dom";

export function useAnimateDeliveryNavBlock(deliveryPath, pickupPath) {
    const location = useLocation();
    const currentPath = location.pathname + location.search;

    if (currentPath === deliveryPath) return true;
    else if (currentPath === pickupPath) return false;
}
