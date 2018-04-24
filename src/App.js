import React, { Component } from 'react';
import { connect } from "react-redux";
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from "./components/home/Home";
import CategoryMain from "./containers/CategoryMain";
import ProductMain from "./containers/ProductMain";
import OrderMain from "./containers/OrderMain";
import About from "./components/about/About";

import {
    setCategoryFilter,
    addCategoryOpen, addCategoryClose,
    editCategoryOpen, editCategoryClose,
    deleteCategoryOpen, deleteCategoryClose,
    loadCategories, addCategory, editCategory, deleteCategory
}
    from "./actions/categoryActions";

import {
    selectCategory, selectProduct,
    setProductFilter,
    addProductOpen, addProductClose,
    editProductOpen, editProductClose,
    deleteProductOpen, deleteProductClose,
    loadProducts, addProduct, editProduct, deleteProduct
}
    from "./actions/productActions";

import {
    setOrderFilter, setAllFlag,
    loadOrders, serveOrder, payOrder
}
    from "./actions/orderActions";

class App extends Component {

    render() {

        return (
            <div>
                <Header />

                <Switch>
                    <Route exact path='/' component={Home} />

                    <Route path='/categories' render={() => (
                        <CategoryMain categoryReducer={this.props.categoryReducer}
                            categoryDispatcher={this.props.categoryDispatcher} />
                    )} />

                    <Route path='/products' render={() => (
                        <ProductMain productReducer={this.props.productReducer}
                            productDispatcher={this.props.productDispatcher} />
                    )} />

                    <Route path='/orders' render={() => (
                        <OrderMain orderReducer={this.props.orderReducer}
                            orderDispatcher={this.props.orderDispatcher} />
                    )} />

                    <Route path='/about' component={About} />

                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categoryReducer: state.categoryReducer,
        productReducer: state.productReducer,
        orderReducer: state.orderReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        categoryDispatcher: {
            setCategoryFilter: (text) => {
                dispatch(setCategoryFilter(text));
            },
            addCategoryOpen: () => {
                dispatch(addCategoryOpen());
            },
            addCategoryClose: () => {
                dispatch(addCategoryClose());
            },
            editCategoryOpen: (category) => {
                dispatch(editCategoryOpen(category));
            },
            editCategoryClose: () => {
                dispatch(editCategoryClose());
            },
            deleteCategoryOpen: (category) => {
                dispatch(deleteCategoryOpen(category));
            },
            deleteCategoryClose: () => {
                dispatch(deleteCategoryClose());
            },
            loadCategories: () => {
                dispatch(loadCategories());
            },
            addCategory: (category) => {
                dispatch(addCategory(category));
            },
            editCategory: (categoryId, category) => {
                dispatch(editCategory(categoryId, category));
            },
            deleteCategory: (categoryId) => {
                dispatch(deleteCategory(categoryId));
            },
        },
        productDispatcher: {
            selectCategory: (categoryId) => {
                dispatch(selectCategory(categoryId));
            },
            selectProduct: (productId) => {
                dispatch(selectProduct(productId));
            },
            setProductFilter: (text) => {
                dispatch(setProductFilter(text));
            },
            addProductOpen: () => {
                dispatch(addProductOpen());
            },
            addProductClose: () => {
                dispatch(addProductClose());
            },
            editProductOpen: () => {
                dispatch(editProductOpen());
            },
            editProductClose: () => {
                dispatch(editProductClose());
            },
            deleteProductOpen: () => {
                dispatch(deleteProductOpen());
            },
            deleteProductClose: () => {
                dispatch(deleteProductClose());
            },
            loadProducts: () => {
                dispatch(loadProducts());
            },
            addProduct: (product) => {
                dispatch(addProduct(product));
            },
            editProduct: (product) => {
                dispatch(editProduct(product));
            },
            deleteProduct: (productId) => {
                dispatch(deleteProduct(productId));
            }
        },
        orderDispatcher: {
            setAllFlag: (showAll) => {
                dispatch(setAllFlag(showAll));
            },
            setOrderFilter: (text) => {
                dispatch(setOrderFilter(text));
            },
            loadOrders: (showAll) => {
                dispatch(loadOrders(showAll));
            },
            serveOrder: (id, showAll) => {
                dispatch(serveOrder(id, showAll));
            },
            payOrder: (id, showAll) => {
                dispatch(payOrder(id, showAll));
            },

        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

