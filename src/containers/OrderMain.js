import React, { Component } from "react";
import { Checkbox, FormGroup } from "react-bootstrap";

import Spinner from "../components/common/Spinner";
import OrderTable from "../components/order/OrderTable";
import SearchBar from "../components/common/SearchBar";

class OrderMain extends Component {

    componentDidMount() {
        this.props.orderDispatcher.loadOrders(this.props.orderReducer.showAll);

        this.interVal = setInterval(() =>
            this.props.orderDispatcher.loadOrders(this.props.orderReducer.showAll),
            10000);
    }

    componentWillUnmount() {
        clearInterval(this.interVal);
    }

    handleServe = (id) => {
        this.props.orderDispatcher.serveOrder(id, this.props.orderReducer.showAll);
    }

    handlePay = (id) => {
        this.props.orderDispatcher.payOrder(id, this.props.orderReducer.showAll);
    }

    handleShowAll = (event) => {
        this.props.orderDispatcher.setAllFlag(event.target.checked);
        this.props.orderDispatcher.loadOrders(event.target.checked);
    }

    handleSearch = (event) => {
        this.props.orderDispatcher.setOrderFilter(event.target.value.trim());
    }

    filterOrders = (orders, filter) => {
        if (filter !== '') {
            return orders.filter((order) => {
                let name = order.name.toLowerCase().trim();
                let phone = order.phone.toLowerCase().trim();
                if (name.indexOf(filter) > -1 || phone.indexOf(filter) > -1)
                    return true;
                else
                    return false;
            })
        }
        else
            return orders;
    }

    render() {
        const orders = this.filterOrders(this.props.orderReducer.orders,
            this.props.orderReducer.filter.toLowerCase().trim());

        return (
            <div id="main">
                <h1>Orders</h1>

                <Spinner isLoading={this.props.orderReducer.isLoading} />

                <SearchBar handleChange={this.handleSearch} filter={this.props.orderReducer.filter}
                    field="Customer Name or Phone" />

                <div style={{ float: "right" }}>
                    <FormGroup>
                        <Checkbox onChange={this.handleShowAll}>Show All</Checkbox>
                    </FormGroup>
                </div>
                <br/><br/>

                <OrderTable orders={orders}
                    handleShowAll={this.handleShowAll}
                    handleServe={this.handleServe}
                    handlePay={this.handlePay}
                />
            </div>
        );
    }

};

export default OrderMain;