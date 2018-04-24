import axios from 'axios';
import { API_URL } from '../contants';

//Sync actions
export const SELECT_CATEGORY = "SELECT_CATEGORY";
export const SELECT_PRODUCT = "SELECT_PRODUCT";
export const SET_PRODUCT_FILTER = "SET_PRODUCT_FILTER";
export const ADD_PRODUCT_OPEN = "ADD_PRODUCT_OPEN";
export const ADD_PRODUCT_CLOSE = "ADD_PRODUCT_CLOSE";
export const EDIT_PRODUCT_OPEN = "EDIT_PRODUCT_OPEN";
export const EDIT_PRODUCT_CLOSE = "EDIT_PRODUCT_CLOSE";
export const DELETE_PRODUCT_OPEN = "DELETE_PRODUCT_OPEN";
export const DELETE_PRODUCT_CLOSE = "DELETE_PRODUCT_CLOSE";

//Async actions
export const LOAD_PRODUCTS_REQUEST = "LOAD_PRODUCTS_REQUEST";
export const LOAD_PRODUCTS_RESPONSE = "LOAD_PRODUCTS_RESPONSE";
export const ADD_PRODUCT_REQUEST = "ADD_PRODUCT_REQUEST";
export const ADD_PRODUCT_RESPONSE = "ADD_PRODUCT_RESPONSE";
export const EDIT_PRODUCT_REQUEST = "EDIT_PRODUCT_REQUEST";
export const EDIT_PRODUCT_RESPONSE = "EDIT_PRODUCT_RESPONSE";
export const DELETE_PRODUCT_REQUEST = "DELETE_PRODUCT_REQUEST";
export const DELETE_PRODUCT_RESPONSE = "DELETE_PRODUCT_RESPONSE";
export const SHOW_ERROR = "SHOW_ERROR";


//sync action creators
export const selectCategory = (categoryId) => {
    return {
        type: SELECT_CATEGORY,
        categoryId: categoryId
    }
}
export const selectProduct = (productId) => {
    return {
        type: SELECT_PRODUCT,
        productId: productId
    }
}

export const setProductFilter = (text) => {
    return {
        type: SET_PRODUCT_FILTER,
        text: text
    }
}

export const addProductOpen = () => {
    return {
        type: ADD_PRODUCT_OPEN
    }
}

export const addProductClose = () => {
    return {
        type: ADD_PRODUCT_CLOSE
    }
}

export const editProductOpen = () => {
    return {
        type: EDIT_PRODUCT_OPEN
    }
}

export const editProductClose = () => {
    return {
        type: EDIT_PRODUCT_CLOSE
    }
}

export const deleteProductOpen = () => {
    return {
        type: DELETE_PRODUCT_OPEN
    }
}

export const deleteProductClose = () => {
    return {
        type: DELETE_PRODUCT_CLOSE
    }
}

//async action creators
function loadProductsRequest() {
    return {
        type: LOAD_PRODUCTS_REQUEST
    }
};

function loadProductsResponse(categories) {
    return {
        type: LOAD_PRODUCTS_RESPONSE,
        categories: categories
    }
};

function addProductRequest() {
    return {
        type: ADD_PRODUCT_REQUEST
    }
};

function addProductResponse(product) {
    return {
        type: ADD_PRODUCT_RESPONSE,
        product: product
    }
};

function editProductRequest() {
    return {
        type: EDIT_PRODUCT_REQUEST
    }
};

function editProductResponse(product) {
    return {
        type: EDIT_PRODUCT_RESPONSE,
        product: product
    }
};

function deleteProductRequest() {
    return {
        type: DELETE_PRODUCT_REQUEST
    }
};

function deleteProductResponse(productId) {
    return {
        type: DELETE_PRODUCT_RESPONSE,
        productId: productId
    }
};

function showError(error) {
    if (error.response)
        alert(error.response.data.message);
    else
        alert(error);

    return {
        type: SHOW_ERROR,
        error: error
    }
};


//Dispatch async actions
export const loadProducts = () => {
    return dispatch => {
        dispatch(loadProductsRequest());
        axios({
            method: 'get',
            url: `${API_URL}/categories/`,
        }).then(response => {
            dispatch(loadProductsResponse(response.data.categories));
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}

export const addProduct = (product) => {
    return dispatch => {
        dispatch(addProductRequest());
        axios({
            method: 'post',
            url: `${API_URL}/products`,
            data: product
        }).then(response => {
            product.id = response.data.id
            dispatch(addProductResponse(product));
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}

export const editProduct = (product) => {
    return dispatch => {
        dispatch(editProductRequest());
        axios({
            method: 'put',
            url: `${API_URL}/products/${product.id}`,
            data: product
        }).then(response => {
            dispatch(editProductResponse(product));
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}

export const deleteProduct = (productId) => {
    return dispatch => {
        dispatch(deleteProductRequest());
        axios({
            method: 'delete',
            url: `${API_URL}/products/${productId}`,
        }).then(response => {
            dispatch(deleteProductResponse(productId));
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}




