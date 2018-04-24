import {
    SET_CATEGORY_FILTER,
    ADD_CATEGORY_OPEN, ADD_CATEGORY_CLOSE,
    EDIT_CATEGORY_OPEN, EDIT_CATEGORY_CLOSE,
    DELETE_CATEGORY_OPEN, DELETE_CATEGORY_CLOSE,
    LOAD_CATEGORIES_REQUEST, LOAD_CATEGORIES_RESPONSE,
    ADD_CATEGORY_REQUEST, ADD_CATEGORY_RESPONSE,
    EDIT_CATEGORY_REQUEST, EDIT_CATEGORY_RESPONSE,
    DELETE_CATEGORY_REQUEST, DELETE_CATEGORY_RESPONSE,
    SHOW_ERROR
} from "../actions/categoryActions"

const categoryReducer = (
    state = {
        isLoading: true,
        isAdding: false,
        isEditing: false,
        isDeleting: false,
        categories: [],
        category: {},
        filter: ''
    }, action) => {

    let nextCategories = [];
    let nextCategory = {};
    let nextState = {};

    switch (action.type) {

        //Sync Actions
        case SET_CATEGORY_FILTER:
            nextState = Object.assign({}, state, { filter: action.text });
            return nextState;

        case ADD_CATEGORY_OPEN:
            nextState = Object.assign({}, state, { isAdding: true });
            return nextState;

        case ADD_CATEGORY_CLOSE:
            nextState = Object.assign({}, state, { isAdding: false });
            return nextState;

        case EDIT_CATEGORY_OPEN:
            nextCategory = Object.assign({}, action.category);
            nextState = Object.assign({}, state, { isEditing: true, category: nextCategory });
            return nextState;

        case EDIT_CATEGORY_CLOSE:
            nextState = Object.assign({}, state, { isEditing: false, category: {} });
            return nextState;

        case DELETE_CATEGORY_OPEN:
            nextCategory = Object.assign({}, action.category);
            nextState = Object.assign({}, state, { isDeleting: true, category: nextCategory });
            return nextState;

        case DELETE_CATEGORY_CLOSE:
            nextState = Object.assign({}, state, { isDeleting: false, category: {} });
            return nextState;

        //Async Actions    
        case LOAD_CATEGORIES_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case LOAD_CATEGORIES_RESPONSE:
            nextCategories = Object.assign([], action.categories);
            nextState = Object.assign({}, state, { isLoading: false, categories: nextCategories });
            return nextState;

        case ADD_CATEGORY_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case ADD_CATEGORY_RESPONSE:
            nextCategories = Object.assign([], state.categories);
            nextCategories.push(action.category);
            nextState = Object.assign({}, state, { isLoading: false, categories: nextCategories });;
            return nextState;

        case EDIT_CATEGORY_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case EDIT_CATEGORY_RESPONSE:
            nextCategories = state.categories.map((current) => {
                if (current.id === action.category.id)
                    return action.category;
                else
                    return current;
            });
            nextState = Object.assign({}, state, { isLoading: false, categories: nextCategories });;
            return nextState;

        case DELETE_CATEGORY_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case DELETE_CATEGORY_RESPONSE:
            nextCategories = state.categories.filter((current) => {
                if (current.id === action.categoryId)
                    return false;
                else
                    return true;
            });
            nextState = Object.assign({}, state, { isLoading: false, categories: nextCategories });;
            return nextState;

        case SHOW_ERROR:
            nextState = Object.assign({}, state, { isLoading: false });
            return nextState;

        default:
            return state;
    }

}

export default categoryReducer;