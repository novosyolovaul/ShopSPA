import React from "react";
import { useSelector } from "react-redux";
import PageSizeBut from "../../common/PageSizeBut.js/PageSizeBut";
import BasicPagination from "../../common/Pagination/Paginator";
import Searching from "../../common/Searching/Searching";
import SortProducts from "../../common/Sort/Sort";
import s from "./Catalog.module.scss";
import CatalogList from "./CatalogList";

let Catalog = () => {
    const totalProductsCount = useSelector(state => state.catalogPage.totalProductsCount);
    const pageSize = useSelector(state => state.catalogPage.pageSize);
    const currentPage = useSelector(state => state.catalogPage.currentPage);
    const data = useSelector(state => state.catalogPage.data);
    const sort = useSelector(state => state.catalogPage.sort);

    return (
        <div className={s.catalog}>
            <div className={s.catalog_name}>Карточки контента</div>
            <PageSizeBut pageSize={pageSize} />
            <SortProducts data={data} sort={sort} />
            <div className={s.commons} >
                <BasicPagination totalProductsCount={totalProductsCount} pageSize={pageSize} currentPage={currentPage} />
                <Searching data={data} />
            </div>
            <div className={s.catalog_title}>
                <div>Фото</div>
                <div>Название</div>
                <div>Просмотры</div>
                <div>Начало ротации</div>
                <div>Конец ротации</div>
            </div>
            <CatalogList data={data} pageSize={pageSize} currentPage={currentPage} />
        </div>
    )
};

export default Catalog;
