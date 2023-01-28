import data from "./../products.json"
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_PAGE_SIZE = 'SET_PAGE_SIZE';
const SEARCHING_PRODUCT = 'SEARCHING_PRODUCT';
const SORT_PRODUCT = 'SORT_PRODUCT';

let initialState = {
    data,
    totalProductsCount: data.length,
    pageSize: 3,
    currentPage: 1,
    sort: "name"

};

const catalogReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page,
            };
        case SET_PAGE_SIZE:
            return {
                ...state,
                pageSize: action.size,
            };
        case SEARCHING_PRODUCT:
            return {
                ...state,
                data: action.data,
            };
        case SORT_PRODUCT:
            return {
                ...state,
                data: action.data,
                sort: action.sort
            };
        default:
            return state;
    }
}

export let setCurrentPage = (page) => {
    return { type: SET_CURRENT_PAGE, page }
}

export let setPageSize = (size) => {
    return { type: SET_PAGE_SIZE, size }
}

export let serchingProduct = (data) => {
    return { type: SEARCHING_PRODUCT, data }
}

export let sortingProduct = (data, sort) => {
    return { type: SORT_PRODUCT, data, sort}
}

export default catalogReduser;