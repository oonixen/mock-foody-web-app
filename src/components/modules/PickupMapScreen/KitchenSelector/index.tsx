import React from "react";
import styles from "./style.module.scss";
import Button from "../../../generics/Button";
import imageFolder from "../../../../constants/imageFolder";
import screenWidth from "../../../../constants/screenWidth";
import RoutePath from "../../../../classes/navigation/RoutePath";
import { useNavigate } from "react-router-dom";
import scrollbarStyle from "../../../../styles/modules/CustomScrollbar.module.scss";
import RadioButton from "../../../generics/RadioButton";

const KitchenSelector = ({
    isShowKitchenSelector,
    setIsShowKitchenSelector,
}) => {
    const isPhone = window.screen.width <= screenWidth.phone;
    const navigation = useNavigate();

    return (
        <div
            className={styles.PickupMapScreen_KitchenSelector__block}
            style={{
                display: isShowKitchenSelector || !isPhone ? "flex" : "none",
            }}
        >
            <button
                className={styles.PickupMapScreen_KitchenSelector__closeButton}
                onClick={() => setIsShowKitchenSelector(false)}
            >
                <img src={`${imageFolder}multiply.svg`} alt={"close"} />
            </button>
            <h2 className={styles.PickupMapScreen_KitchenSelector__h2}>
                Актуальность меню зависит от адреса
            </h2>
            <div
                className={
                    styles.PickupMapScreen_KitchenSelector__selectorBlock +
                    " " +
                    scrollbarStyle.CustomScrollbar__scrollbar
                }
            >
                <AddressRadioButton sale={true} />
                <AddressRadioButton />
                <AddressRadioButton />
                <AddressRadioButton />
                <AddressRadioButton />
                <AddressRadioButton />
                <AddressRadioButton />
            </div>
            <Button
                className={styles.PickupMapScreen_KitchenSelector__button}
                onClick={() => navigation(RoutePath.getDishCategoryPath(true))}
            >
                выбрать
            </Button>
        </div>
    );
};

const AddressRadioButton = ({ sale = null }) => {
    return (
        <RadioButton name={"pickup-address"}>
            <div>
                <p className={styles.PickupMapScreen_KitchenSelector__text_top}>
                    Ул. Советская, 159
                    {sale ? (
                        <span
                            className={
                                styles.PickupMapScreen_KitchenSelector__saleBlock
                            }
                        >
                            скидка 10%
                        </span>
                    ) : null}
                </p>
                <p className={styles.PickupMapScreen_KitchenSelector__text_bottom}>
                    Кухни: Паназия, Италия, Грузия
                </p>
            </div>
        </RadioButton>
    );
};

export default KitchenSelector;
