import React from "react";
import s from "./Product.module.scss"

let ProductHeader = (props) => {
    return (
        <div className={s.product_header}>
            {props.value[props.id].new_price &&
                <div className={s.product_header_discount}>
                    {"-" + props.value[props.id].discount + "%"}
                </div>
            }
            {!props.value[props.id].new_price &&
                <div></div>
            }
            <div  >
                <img className={s.product_header_logo} src={props.value[props.id].logo_url}></img>
            </div>
        </div>
    )
};

export default ProductHeader;