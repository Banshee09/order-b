import axios from 'axios';
import { API_URL } from '../contants';

//Sync Actions
export const SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER";
export const ADD_CATEGORY_OPEN = "ADD_CATEGORY_OPEN";
export const ADD_CATEGORY_CLOSE = "ADD_CATEGORY_CLOSE";
export const EDIT_CATEGORY_OPEN = "EDIT_CATEGORY_OPEN";
export const EDIT_CATEGORY_CLOSE = "EDIT_CATEGORY_CLOSE";
export const DELETE_CATEGORY_OPEN = "DELETE_CATEGORY_OPEN";
export const DELETE_CATEGORY_CLOSE = "DELETE_CATEGORY_CLOSE";

//Asyc Actions
export const LOAD_CATEGORIES_REQUEST = "LOAD_CATEGORIES_REQUEST";
export const LOAD_CATEGORIES_RESPONSE = "LOAD_CATEGORIES_RESPONSE";
export const ADD_CATEGORY_REQUEST = "ADD_CATEGORY_REQUEST";
export const ADD_CATEGORY_RESPONSE = "ADD_CATEGORY_RESPONSE";
export const EDIT_CATEGORY_REQUEST = "EDIT_CATEGORY_REQUEST";
export const EDIT_CATEGORY_RESPONSE = "EDIT_CATEGORY_RESPONSE";
export const DELETE_CATEGORY_REQUEST = "DELETE_CATEGORY_REQUEST";
export const DELETE_CATEGORY_RESPONSE = "DELETE_CATEGORY_RESPONSE";
export const SHOW_ERROR = "SHOW_ERROR";


//Sync Actions Creators
export const setCategoryFilter = (text) => {
    return {
        type: SET_CATEGORY_FILTER,
        text: text
    }
}

export const addCategoryOpen = () => {
    return {
        type: ADD_CATEGORY_OPEN
    }
}

export const addCategoryClose = () => {
    return {
        type: ADD_CATEGORY_CLOSE
    }
}

export const editCategoryOpen = (category) => {
    return {
        type: EDIT_CATEGORY_OPEN,
        category: category
    }
}

export const editCategoryClose = () => {
    return {
        type: EDIT_CATEGORY_CLOSE
    }
}

export const deleteCategoryOpen = (category) => {
    return {
        type: DELETE_CATEGORY_OPEN,
        category: category
    }
}

export const deleteCategoryClose = () => {
    return {
        type: DELETE_CATEGORY_CLOSE
    }
}

//Async action creators 
function loadCategoriesRequest() {
    return {
        type: LOAD_CATEGORIES_REQUEST
    }
};

function loadCategoriesResponse(categories) {
    return {
        type: LOAD_CATEGORIES_RESPONSE,
        categories: categories
    }
};

function addCategoryRequest() {
    return {
        type: ADD_CATEGORY_REQUEST
    }
};

function addCategoryResponse(category) {
    return {
        type: ADD_CATEGORY_RESPONSE,
        category: category
    }
};

function editCategoryRequest() {
    return {
        type: EDIT_CATEGORY_REQUEST
    }
};

function editCategoryResponse(category) {
    return {
        type: EDIT_CATEGORY_RESPONSE,
        category: category
    }
};

function deleteCategoryRequest() {
    return {
        type: DELETE_CATEGORY_REQUEST
    }
};

function deleteCategoryResponse(categoryId) {
    return {
        type: DELETE_CATEGORY_RESPONSE,
        categoryId: categoryId
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

//Dispatch Asyc Actions 
export const loadCategories = () => {
    return dispatch => {
        dispatch(loadCategoriesRequest());
        axios({
            method: 'get',
            url: `${API_URL}/categories`,
        }).then(response => {
            dispatch(loadCategoriesResponse(response.data.categories));
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}

export const addCategory = (category) => {
    return dispatch => {
        dispatch(addCategoryRequest());
        axios({
            method: 'post',
            url: `${API_URL}/categories`,
            data: category
        }).then(response => {
            category.id = response.data.id;
            dispatch(addCategoryResponse(category));
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}

export const editCategory = (categoryId, category) => {
    return dispatch => {
        dispatch(editCategoryRequest());
        axios({
            method: 'put',
            url: `${API_URL}/categories/${categoryId}`,
            data: category
        }).then(response => {
            dispatch(editCategoryResponse(category));
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}

export const deleteCategory = (categoryId) => {
    return dispatch => {
        dispatch(deleteCategoryRequest());
        axios({
            method: 'delete',
            url: `${API_URL}/categories/${categoryId}`,
        }).then(response => {
            dispatch(deleteCategoryResponse(categoryId));
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}






