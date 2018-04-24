import {
    LOAD_ORDERS_REQUEST, LOAD_ORDERS_RESPONSE,
    SERVE_ORDER_REQUEST, SERVE_ORDER_RESPONSE,
    PAY_ORDER_REQUEST, PAY_ORDER_RESPONSE,
    SET_ALL_FLAG,
    SHOW_ERROR,
    SET_ORDER_FILTER
} from "../actions/orderActions"

const orderReducer = (
    state = {
        isLoading: true,
        showAll: false,
        orders: [],
        filter: ''
    }, action) => {

    let nextOrders = [];
    let nextState = {};

    switch (action.type) {

        //Sync Actions
        case SET_ALL_FLAG:
            nextState = Object.assign({}, state, { showAll: action.showAll });
            return nextState;

        case SET_ORDER_FILTER:
            nextState = Object.assign({}, state, { filter: action.text });
            return nextState;

        //Async Actions    
        case LOAD_ORDERS_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case LOAD_ORDERS_RESPONSE:
            nextOrders = Object.assign([], action.orders);
            nextState = Object.assign({}, state, { isLoading: false, orders: nextOrders });
            return nextState;

        case SERVE_ORDER_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case SERVE_ORDER_RESPONSE:
            return state;

        case PAY_ORDER_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case PAY_ORDER_RESPONSE:
            return state;

        case SHOW_ERROR:
            nextState = Object.assign({}, state, { isLoading: false });
            return nextState;

        default:
            return state;
    }

}

export default orderReducer;