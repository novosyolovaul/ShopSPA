import React from "react";

let Price = (props) => {
    let forPrice = (price) => {
        return String(price).split(/[ ,.]/g)
    }
    return (
        <>
            {forPrice(props.price).length == 1 ?
                <>
                    <p>{props.price}</p>
                    <p>{props.text}</p>
                </> :
                <>
                    <p>{forPrice(props.price)[0]}
                        <p>
                            {(forPrice(props.price)[1] + '0').slice(0, 2)}
                        </p>
                    </p>
                    <p>{props.text}</p>
                </>
            }
        </>
    )
};

export default Price;