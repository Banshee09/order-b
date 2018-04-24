import React from "react";
import { Table } from "react-bootstrap";

import OrderRow from "./OrderRow";


const OrderTable = ({ orders, handleServe, handlePay }) => {

    return (
        <div>
            <Table responsive>
                <thead>
                </thead>
                <tbody>
                    {orders.map((order) => {
                        return <OrderRow key={order.id} order={order} handleServe={handleServe} handlePay={handlePay} />
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default OrderTable;