import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import s from "./Product.module.scss"
import ProductHeader from "./ProductHeader";
import ProductInfo from "./ProductInfo/ProductInfo";


let Product = () => {
    const id = useParams().id;
    const value = useSelector(state => state.catalogPage.data);
    const navigate = useNavigate();


    return (
        <>
            <div className={s.product}>
                <button className={s.buttonGoBack} onClick={() => navigate(-1)}>
                Назад</button>
                <ProductHeader id={id} value={value} />
                <div className={s.product_body}>
                    <img src={value[id].image_url} className={s.product_body_img}></img>
                    <ProductInfo id={id} value={value} />
                </div>
            </div>
            {value[id].disclaimer &&
                <div className={s.product_footer}>
                    <p>
                        {value[id].disclaimer}
                    </p>
                </div>
            }

        </>

    )
};

export default Product;