import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useDispatch } from 'react-redux';
import { setPageSize } from '../../Redux/CatalogReduser';
import s from "./PageSizeBut.module.scss"

export default function PageSizeBut(props) {
    let dispatch = useDispatch();
    let onChange = (_, value) => {
        dispatch(setPageSize(value))
    }
    return (

        <ToggleButtonGroup
            className={s.button}
            exclusive={true}
            value={props.pageSize}
            onChange={onChange}
            sx={{ height: 30 }}
            selected={true}

        >
            <div className={s.button_text} >
                Показывать товаров на странице
            </div>
            <ToggleButton value="3">3</ToggleButton>
            <ToggleButton value="6">6</ToggleButton>
        </ToggleButtonGroup>
    );
}