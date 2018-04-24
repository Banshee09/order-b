import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import categoryReducer from "./reducers/categoryReducer";
import productReducer from "./reducers/productReducer";
import orderReducer from "./reducers/orderReducer";

const store = createStore(
	combineReducers({ categoryReducer, productReducer, orderReducer}),
	{},
	applyMiddleware(logger, thunk)
);

export default store;