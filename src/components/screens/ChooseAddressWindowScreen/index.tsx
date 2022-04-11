import React from "react";
import BasketModalChooseTemplate from "../../generics/BasketModalChooseTemplate";
import styles from "./style.module.scss";
import scrollBlockStyle from "../../../styles/modules/CustomScrollbar.module.scss";
import AddressRadioButton from "../../modules/ChooseAddressWindowScreen/AddressRadioButton";
import {NavLink} from "react-router-dom";
import RoutePath from "../../../classes/navigation/RoutePath";
import imageFolder from "../../../constants/imageFolder";

const ChooseAddressWindowScreen = () => {

    return (
        <BasketModalChooseTemplate title={"Куда доставить ?"}>
            <div
                className={
                    styles.ChooseAddressWindow_BlockWrapper__addressesBlock +
                    " " +
                    scrollBlockStyle.CustomScrollbar__scrollbar
                }
            >
                <AddressRadioButton />
                <AddressRadioButton />
                <AddressRadioButton />
                <AddressRadioButton />
            </div>
            <NavLink
                className={
                    styles.ChooseAddressWindow_BlockWrapper__navLinkAddAddress
                }
                to={RoutePath.getBasketCreateAddressPath(true)}
            >
                <img
                    className={styles.ChooseAddressWindow_BlockWrapper__plusSvg}
                    src={`${imageFolder}plusWithRoundBorder.svg`}
                    alt={"plus"}
                />
                <span>Ввести другой адрес</span>
            </NavLink>
        </BasketModalChooseTemplate>
    );
};

export default ChooseAddressWindowScreen;
