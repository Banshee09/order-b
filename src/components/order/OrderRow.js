import React from "react";
import moment from 'moment-timezone';
import { Button, Panel, Table, Tooltip, OverlayTrigger } from "react-bootstrap";

const OrderRow = ({ order, handleServe, handlePay }) => {

    let serveButton = "";
    if (order.serveTime) {
        const tooltip = (
            <Tooltip id="tooltip">
                {moment(order.serveTime).tz('Australia/Sydney').format("DD/MM/YYYY, HH:mm:ss")}
            </Tooltip>
        );
        serveButton = (
            <OverlayTrigger placement="top" overlay={tooltip}>
                <Button bsStyle="success" className="btn-std" >Served</Button>
            </OverlayTrigger>);
    }
    else {
        serveButton = (
            <Button bsStyle="primary" className="btn-std" onClick={() => {
                if (window.confirm(`Are you sure to serve the order ${order.id}`)) {
                    handleServe(order.id)
                }
            }}>Serve</Button>);
    }


    let payButton = "";
    if (order.payTime) {
        const tooltip = (
            <Tooltip id="tooltip">
                {moment(order.payTime).tz('Australia/Sydney').format("DD/MM/YYYY, HH:mm:ss")}
            </Tooltip>
        );

        payButton = (
            <OverlayTrigger placement="top" overlay={tooltip}>
                <Button bsStyle="success" className="btn-std">Paid</Button>
            </OverlayTrigger>
        );

    }
    else {
        payButton = <Button bsStyle="primary" className="btn-std" onClick={() => {
            if (window.confirm(`Are you sure to pay the order ${order.id}`)) {
                handlePay(order.id)
            }
        }}>Pay</Button>;
    }


    return (
        <tr>
            <td>
                <Panel id={'order' + order.id}>
                    <Panel.Heading>
                        <Panel.Title>
                            <Panel.Toggle componentClass="a">
                            </Panel.Toggle>
                            &nbsp;&nbsp;{order.id}
                        </Panel.Title>
                    </Panel.Heading>

                    <Panel.Collapse>
                        <Panel.Body>
                            <div>Name: {order.name}</div>
                            <div>Phone: {order.phone}</div>
                            <div>Total: {order.total}</div>
                            <div>Note: {order.note}</div>
                            <br />
                            <Table>
                                <tbody>
                                    {order.products.map((product, index) => <tr key={index}><td>{product.name}</td><td>{product.price}</td></tr>)}
                                </tbody>
                            </Table>
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
            </td>
            <td align='right'>
                {serveButton}
                &nbsp;
                {payButton}
            </td>

        </tr>
    );
}

export default OrderRow;