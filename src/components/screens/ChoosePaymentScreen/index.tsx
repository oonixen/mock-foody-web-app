import React from "react";
import BasketModalChooseTemplate from "../../generics/BasketModalChooseTemplate";
import RadioButton from "../../generics/RadioButton";

const ChoosePaymentScreen = () => {

    const array = [
        "картой на сайте",
        "наличными курьеру",
        "картой курьеру"
    ]

    return (
        <BasketModalChooseTemplate title={"Оплата"}>
            <div>
                {
                    array.map((v, i) => (
                        <RadioButton
                            key={i}
                            name={"payment"}
                            description={v}
                        />
                    ))
                }
            </div>
        </BasketModalChooseTemplate>
    );
};

export default ChoosePaymentScreen;
