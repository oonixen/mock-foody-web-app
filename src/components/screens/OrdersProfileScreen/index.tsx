import React from "react";
import OrderNavLink from "../../modules/OrdersProfileScreen/OrderNavLink";

const OrdersProfileScreen = () => {

    const array = Array(3).fill({})

    return (
        <>
            {
                array.map((v, i) => {
                    return (
                        <OrderNavLink key={i} orderId={i}/>
                    )
                })
            }
        </>
    )
}

export default OrdersProfileScreen