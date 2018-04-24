import {
    SELECT_CATEGORY, SELECT_PRODUCT,
    SET_PRODUCT_FILTER,
    ADD_PRODUCT_OPEN, ADD_PRODUCT_CLOSE,
    EDIT_PRODUCT_OPEN, EDIT_PRODUCT_CLOSE,
    DELETE_PRODUCT_OPEN, DELETE_PRODUCT_CLOSE,
    LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_RESPONSE,
    ADD_PRODUCT_REQUEST, ADD_PRODUCT_RESPONSE,
    EDIT_PRODUCT_REQUEST, EDIT_PRODUCT_RESPONSE,
    DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_RESPONSE,
    SHOW_ERROR
}
    from "../actions/productActions"

const productReducer = (
    state = {
        isLoading: true,
        isAdding: false,
        isEditing: false,
        isDeleting: false,
        categories: [],
        categoryId: 0,
        productId: 0,
        filter: ''
    }, action) => {

    let nextCategories = [];
    let nextState = {};

    switch (action.type) {
        //Sync Actions
        case SELECT_CATEGORY:
            nextState = Object.assign({}, state, { categoryId: action.categoryId });
            return nextState;

        case SELECT_PRODUCT:
            nextState = Object.assign({}, state, { productId: action.productId });
            return nextState;

        case SET_PRODUCT_FILTER:
            nextState = Object.assign({}, state, { filter: action.text });
            return nextState;

        case ADD_PRODUCT_OPEN:
            nextState = Object.assign({}, state, { isAdding: true });
            return nextState;

        case ADD_PRODUCT_CLOSE:
            nextState = Object.assign({}, state, { isAdding: false });
            return nextState;

        case EDIT_PRODUCT_OPEN:
            nextState = Object.assign({}, state, { isEditing: true });
            return nextState;

        case EDIT_PRODUCT_CLOSE:
            nextState = Object.assign({}, state, { isEditing: false });
            return nextState;

        case DELETE_PRODUCT_OPEN:
            nextState = Object.assign({}, state, { isDeleting: true });
            return nextState;

        case DELETE_PRODUCT_CLOSE:
            nextState = Object.assign({}, state, { isDeleting: false });
            return nextState;

        //Async Actions
        case LOAD_PRODUCTS_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case LOAD_PRODUCTS_RESPONSE:
            nextState = Object.assign({}, state, {
                isLoading: false,
                categories: action.categories,
                categoryId: action.categories[0].id
            });
            return nextState;

        case ADD_PRODUCT_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case ADD_PRODUCT_RESPONSE:
            nextCategories = state.categories.map((category) => {
                let nextProducts = Object.assign([], category.products);
                if (category.id === action.product.category.id)
                    nextProducts.push(action.product);
                return Object.assign({}, category, { products: nextProducts })
            });

            nextState = Object.assign({}, state, { isLoading: false, categories: nextCategories });
            return nextState;

        case EDIT_PRODUCT_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case EDIT_PRODUCT_RESPONSE:
            nextCategories = state.categories.map((category) => {
                let nextProducts = [];
                if (category.id === action.product.category.id)
                    nextProducts = category.products.map((product) => {
                        if (product.id === action.product.id)
                            return action.product;
                        else
                            return product;
                    })
                else
                    nextProducts = Object.assign([], category.products);

                return Object.assign({}, category, { products: nextProducts });
            });

            nextState = Object.assign({}, state, { isLoading: false, categories: nextCategories });
            return nextState;

        case DELETE_PRODUCT_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case DELETE_PRODUCT_RESPONSE:
            nextCategories = state.categories.map((category) => {
                let nextProducts = category.products.filter((product) => {
                    if (product.id === action.productId)
                        return false;
                    else
                        return true;
                });

                return Object.assign({}, category, { products: nextProducts });
            });

            nextState = Object.assign({}, state, { isLoading: false, categories: nextCategories });
            return nextState;

        case SHOW_ERROR:
            nextState = Object.assign({}, state, { isLoading: false });
            return nextState;

        default:
            return state;
    }

}

export default productReducer;