import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../Redux/CatalogReduser';
import s from "./Paginator.module.scss";

export default function BasicPagination(props) {
    let count = Math.ceil(props.totalProductsCount / props.pageSize);
    let dispatsh = useDispatch();
    return (
        <Stack sx={{ maxWidth: 250}} classes={s.style} >
            <Pagination
                count={count}
                page={props.currentPage}
                onChange={(_, num) => dispatsh(setCurrentPage(num))}
                variant="outlined"
                shape="rounded"


            />
        </Stack>
    );
}