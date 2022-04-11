import React, {useState} from "react";
import styles from "./style.module.scss";
import Map from "../../modules/PickupMapScreen/Map";
import KitchenSelector from "../../modules/PickupMapScreen/KitchenSelector";

const PickupMap = () => {

    const [isShowKitchenSelector, setIsShowKitchenSelector] = useState(false);

    return (
        <div className={styles.PickupMapScreen_BlockWrapper__block}>
            <Map setIsShowKitchenSelector={setIsShowKitchenSelector} />
            <KitchenSelector
                isShowKitchenSelector={isShowKitchenSelector}
                setIsShowKitchenSelector={setIsShowKitchenSelector}
            />
        </div>
    );
};

export default PickupMap;
