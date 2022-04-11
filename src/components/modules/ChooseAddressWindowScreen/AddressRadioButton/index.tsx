import RadioButton from "../../../generics/RadioButton";
import styles from "./style.module.scss";
import AddressEditButton from "../../../generics/AddressEditButton";
import React from "react";

const AddressRadioButton = () => {

    return (
        <RadioButton
            name={"delivery-address"}
            labelClass={
                styles.ChooseAddressWindowScreen_AddressRadioButton__label
            }
        >
            <AddressEditButton />
        </RadioButton>
    );
};

export default AddressRadioButton