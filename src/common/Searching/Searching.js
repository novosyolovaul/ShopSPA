import { cloneDeep } from 'lodash';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { serchingProduct } from '../../Redux/CatalogReduser';
import s from './Searching.module.scss';
import SearchIcon from '@mui/icons-material/Search';


let Searching = (props) => {
    const [data, _] = useState(cloneDeep(props.data));
    let dispatch = useDispatch();
    let updateList = (filteredData) => {
        dispatch(serchingProduct(filteredData))
    }

    let searchProduct = e => {
        let world = e.target.value.toLowerCase();

        let filteredData = data.filter(el => {
            return (el.name.toLowerCase().search(world) !== -1) && el;
        });
        updateList(filteredData);
    };

    return (
        <div className={s.searching}>
            <SearchIcon fontSize="small" color='disabled' />
            <input 
                type="text"
                className={s.input}
                placeholder="Поиск..."
                onChange={searchProduct}
            />
        </div>
    );
};

export default Searching;