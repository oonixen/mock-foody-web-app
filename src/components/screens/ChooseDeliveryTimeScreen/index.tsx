import React from "react";
import BasketModalChooseTemplate from "../../generics/BasketModalChooseTemplate";
import RadioButton from "../../generics/RadioButton";

const ChooseDeliveryTimeScreen = () => {

    const array = [
        "побыстрее ~ 30 мин",
        "11:00 – 11:30",
        "12:00 – 12:30",
        "13:00 – 13:30"
    ]

    return (
        <BasketModalChooseTemplate title={"Время доставки"}>
            <div>
                {
                    array.map((v,i) => (
                        <RadioButton
                            key={i}
                            name={"timeInterval"}
                            description={v}
                        />
                    ))
                }
            </div>
        </BasketModalChooseTemplate>
    );
};

export default ChooseDeliveryTimeScreen;
