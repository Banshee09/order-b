import axios from 'axios';
import { API_URL } from '../contants';

//Sync Actions
export const SET_ALL_FLAG = "SET_ALL_FLAG";
export const SET_ORDER_FILTER = "SET_ORDER_FILTER";


//Asyc Actions
export const LOAD_ORDERS_REQUEST = "LOAD_ORDERS_REQUEST";
export const LOAD_ORDERS_RESPONSE = "LOAD_ORDERS_RESPONSE";
export const SERVE_ORDER_REQUEST = "SERVE_ORDER_REQUEST";
export const SERVE_ORDER_RESPONSE = "SERVE_ORDER_RESPONSE";
export const PAY_ORDER_REQUEST = "PAY_ORDER_REQUEST";
export const PAY_ORDER_RESPONSE = "PAY_ORDER_RESPONSE";
export const SHOW_ERROR = "SHOW_ERROR";


//Sync Actions Creators
export const setAllFlag = (showAll) => {
    return {
        type:SET_ALL_FLAG,
        showAll:showAll
    }
}

export const setOrderFilter = (text) => {
    return {
        type:SET_ORDER_FILTER,
        text:text
    }
}

//Async action creators 
function loadOrdersRequest() {
    return {
        type: LOAD_ORDERS_REQUEST,
    }
};

function loadOrdersResponse(orders) {
    return {
        type: LOAD_ORDERS_RESPONSE,
        orders: orders
    }
};

function serveOrderRequest() {
    return {
        type: SERVE_ORDER_REQUEST,
    }
};

function serveOrderResponse() {
    return {
        type: SERVE_ORDER_RESPONSE,
    }
};

function payOrderRequest() {
    return {
        type: PAY_ORDER_REQUEST,
    }
};

function payOrderResponse() {
    return {
        type: PAY_ORDER_RESPONSE,
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
export const loadOrders = (showAll) => {
    return dispatch => {
        dispatch(loadOrdersRequest());
        axios({
            method: 'get',
            url: `${API_URL}/orders?showAll=${showAll}`,
        }).then(response => {
            dispatch(loadOrdersResponse(response.data.orders));
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}


export const serveOrder = (id, showAll) => {
    return dispatch => {
        dispatch(serveOrderRequest());
        axios({
            method: 'patch',
            url: `${API_URL}/orders/${id}`,
            data: {key: "serveTime"}
        }).then(response => {
            dispatch(serveOrderResponse());
            dispatch(loadOrders(showAll))
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}

export const payOrder = (id, showAll) => {
    return dispatch => {
        dispatch(payOrderRequest());
        axios({
            method: 'patch',
            url: `${API_URL}/orders/${id}`,
            data: {key: "payTime"}
        }).then(response => {
            dispatch(payOrderResponse());
            dispatch(loadOrders(showAll))
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}







