import React from 'react';
import { sortingProduct } from '../../Redux/CatalogReduser';
import { useDispatch } from 'react-redux';
import { cloneDeep } from 'lodash';
import s from './Sort.module.scss'

export default function SortProducts(props) {
    React.useEffect(() => {
        sortProduct(_, props.sort)
    }, [])
    const [data, _] = React.useState(cloneDeep(props.data));
    let dispatch = useDispatch();
    let updateList = (sortedData, sort) => {
        dispatch(sortingProduct(sortedData, sort))
    }

    let sortProduct = (_, value) => {
        let forPrice = (price) =>{
            return Number((String(price)).replace(/,/, '.'))
        }
        let sortedData;
        if (value == "price_up") {
            sortedData = data.sort((a, b) =>
            forPrice(a.new_price || a.old_price) - forPrice(b.new_price || b.old_price))
        } else if (value == "price_down") {
            sortedData = data.sort((a, b) =>
                forPrice(b.new_price || b.old_price) - forPrice(a.new_price || a.old_price))
        } else if (value == "start_date") {
            sortedData = data.sort((a, b) =>
                new Date(a.start_date) - new Date(b.start_date)
            )
        } else if (value == "end_date") {
            sortedData = data.sort((a, b) =>
                new Date(a.end_date) - new Date(b.end_date)
            )
        } else {
            sortedData = data.sort((a, b) => a[value] > b[value] ? 1 : -1);
        }
        updateList(sortedData, value);
    }
    return (
        <div className={s.sort} >
            <span>
                Сортировать:
            </span>
            <button onClick={e => sortProduct(e, "name")} >по названию</button>
            <button onClick={e => sortProduct(e, 'views')} >по просмотрам</button>
            <button onClick={e => sortProduct(e, 'start_date')} >по дате начала</button>
            <button onClick={e => sortProduct(e, 'end_date')} >по дате окончания</button>
            <button onClick={e => sortProduct(e, 'price_up')} >по возрастанию цены</button>
            <button onClick={e => sortProduct(e, 'price_down')} >по убыванию цены</button>
        </div>
    );
}