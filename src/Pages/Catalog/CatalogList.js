import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Catalog.module.scss";

let CatalogList = (props) => {
    let maxIndex = props.currentPage * props.pageSize;
    let minIndex = maxIndex - props.pageSize;
    let currentProducts = props.data.slice(minIndex, maxIndex);

    return (
        <>
            {currentProducts.map((u, index) =>
                <NavLink to={"/product/" + (index + (props.currentPage - 1) * props.pageSize)}>
                    <div className={s.catalog_list}>
                        <img className={s.catalog_list_img} src={u.image_url} ></img>
                        <div className={s.catalog_list_names}>
                            <div className={s.catalog_list_names_name}>{u.name}</div>
                            <div className={s.catalog_list_names_category}>{u.category}</div>
                        </div>
                        <div className={s.catalog_list_views}>
                            {u.views}
                        </div>
                        <div className={s.catalog_list_startDate}>
                            {Intl.DateTimeFormat("ru").format(new Date(u.start_date))}
                        </div>
                        <div className={s.catalog_list_endDate}>
                            {Intl.DateTimeFormat("ru").format(new Date(u.end_date))}
                        </div>
                    </div>
                </NavLink>

            )
            }
        </>
    )
};

export default CatalogList;
