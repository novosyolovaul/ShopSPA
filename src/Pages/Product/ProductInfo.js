import React from "react";
import s from "./Product.module.scss"
import Stars from "./Stars";


let ProductInfo = (props) => {
    return (
        <div className={s.product_body_inf}>
            <div className={s.product_body_inf_name}>{props.value[props.id].name}</div>
            <div className={s.null}></div>
            <Stars className={s.product_body_inf_stars} stars={props.value[props.id].stars} />
            {props.value[props.id].new_price &&
                <>
                    <div className={s.product_body_inf_oldPrice}>
                        {String(props.value[props.id].old_price).split(/[ ,.]/g).length == 1 ?
                            <>
                                <p>{props.value[props.id].old_price}</p>
                                <p>старая цена</p>
                            </> :
                            <>
                                <p>{String(props.value[props.id].old_price).split(/[ ,.]/g)[0]}
                                    <p>
                                        {(String(props.value[props.id].old_price).split(/[ ,.]/g)[1] + '0').slice(0, 2)}
                                    </p>
                                </p>
                                <p>старая цена</p>
                            </>

                        }

                    </div>
                    <div className={s.product_body_inf_newPrice}>
                        {String(props.value[props.id].new_price).split(/[ ,.]/g).length == 1 ?
                            <>
                                <p>{props.value[props.id].new_price}</p>
                                <p>цена по скидке</p>
                            </> :
                            <>
                                <p>{String(props.value[props.id].new_price).split(/[ ,.]/g)[0]}
                                    <p> {(String(props.value[props.id].new_price).split(/[ ,.]/g)[1] + '0').slice(0, 2)}</p>
                                </p>
                                <p>цена по скидке</p>
                            </>

                        }
                    </div>
                </>
            }
            {!props.value[props.id].new_price &&
                <>
                    <div className={s.product_body_inf_newPrice}>
                        {String(props.value[props.id].old_price).split(/[ ,.]/g).length == 1 ?
                            <>
                                <p>{props.value[props.id].old_price}</p>
                                <p>цена</p>
                            </> :
                            <>
                                <p>
                                    {String(props.value[props.id].old_price).split(/[ ,.]/g)[0]}
                                    <p>
                                        {(String(props.value[props.id].old_price).split(/[ ,.]/g)[1] + '0').slice(0, 2)}
                                    </p>
                                </p>
                                <p>цена</p>
                            </>

                        }
                    </div>
                </>
            }
        </div>
    )
};

export default ProductInfo;