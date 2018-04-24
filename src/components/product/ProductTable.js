import React from "react";
import { Grid, Row , Button} from "react-bootstrap";

import ProductRow from "./ProductRow";

const ProductTable = ({ products, handleSelectProduct}) => {

    return (
        <div>
            <Grid fluid>
                <Row>
                    {products.map((product) =>
                        (<ProductRow key={product.id} product={product} handleSelectProduct={handleSelectProduct} />))}
                </Row>
            </Grid>
        </div>
    );
}

export default ProductTable;