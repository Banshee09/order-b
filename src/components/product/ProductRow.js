import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

const ProductRow = ({ product, handleSelectProduct }) => {

    return (

        <Col xs={6} sm={4} md={3} className="product-col">
            <Link to={"#"} onClick={() => handleSelectProduct(product.id)}>
                <div className="thumbnail">
                    <div className="small-img" style={{ backgroundImage: `url(${product.imageURL})`, backgroundSize: "cover" }}></div>
                    <div>{product.name}</div>
                    <div className="price">{product.price}</div>
                </div>
            </Link>
        </Col>

    );
}

export default ProductRow;