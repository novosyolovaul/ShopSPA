import React from "react";
import s from "./../Product.module.scss"
import Stars from "./../Stars";
import Price from "./Price";


let ProductInfo = (props) => {
    let newPrice = props.value[props.id].new_price;
    let oldPrice = props.value[props.id].old_price;
    return (
        <div className={s.product_body_inf}>
            <div className={s.product_body_inf_name}>{props.value[props.id].name}</div>
            <div className={s.null}></div>
            <Stars className={s.product_body_inf_stars} stars={props.value[props.id].stars} />
            {newPrice &&
                <>
                    <div className={s.product_body_inf_oldPrice}>
                        <Price price={oldPrice} text='старая цена' />
                    </div>
                    <div className={s.product_body_inf_newPrice}>
                        <Price price={newPrice} text="цена по скидке" />
                    </div>
                </>
            }
            {!newPrice &&
                <div className={s.product_body_inf_newPrice}>
                    <Price price={oldPrice} text='цена' />
                </div>
            }
        </div>
    )
};

export default ProductInfo;