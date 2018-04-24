import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormControl, ControlLabel, FormGroup, InputGroup, Image, Button } from "react-bootstrap"

import Spinner from "../components/common/Spinner";
import CUDModal from "../components/common/CUDModal";
import ProductTable from "../components/product/ProductTable";
import SearchBar from "../components/common/SearchBar";


class ProductMain extends Component {

    componentDidMount() {
        this.props.productDispatcher.loadProducts();
    }

    handleSelectCategory = (event) => {
        this.props.productDispatcher.selectCategory(parseInt(event.target.value, 10));
    }

    handleSelectProduct = (productId) => {
        this.props.productDispatcher.selectProduct(productId);
    }

    handleAddOpen = () => {
        this.props.productDispatcher.addProductOpen();
    };

    handleAddClose = () => {
        this.props.productDispatcher.addProductClose();
    }

    handleAddSubmit = () => {
        const name = document.getElementById('addProductName').value.trim();
        const price = document.getElementById('addProductPrice').value.trim();
        const imageURL = document.getElementById('addProductImageURL').value.trim();
        const description = document.getElementById('addProductDescription').value.trim();
        const categoryId = this.props.productReducer.categoryId;
        const product = { name: name, price: price, imageURL: imageURL, description: description, category: { id: categoryId } };
        this.props.productDispatcher.addProduct(product);
        this.props.productDispatcher.addProductClose();
    }

    handleEditOpen = () => {
        this.props.productDispatcher.editProductOpen();
    };

    handleEditClose = () => {
        this.props.productDispatcher.editProductClose();
    }

    handleEditSubmit = () => {
        const name = document.getElementById('editProductName').value.trim();
        const price = document.getElementById('editProductPrice').value.trim();
        const imageURL = document.getElementById('editProductImageURL').value.trim();
        const description = document.getElementById('editProductDescription').value.trim();
        const categoryId = this.props.productReducer.categoryId;
        const productId = this.props.productReducer.productId;
        const product = { id: productId, name: name, price: price, imageURL: imageURL, description: description, category: { id: categoryId } };
        this.props.productDispatcher.editProduct(product);
        this.props.productDispatcher.editProductClose();

    }

    handleDeleteOpen = () => {
        this.props.productDispatcher.deleteProductOpen();
    };

    handleDeleteClose = () => {
        this.props.productDispatcher.deleteProductClose();
    }

    handleDeleteSubmit = () => {
        const productId = this.props.productReducer.productId;
        this.props.productDispatcher.selectProduct(0);
        this.props.productDispatcher.deleteProduct(productId);
        this.props.productDispatcher.deleteProductClose();
    };

    handleSearch = (event) => {
        this.props.productDispatcher.setProductFilter(event.target.value);
    };

    filterProducts(products, filter) {
        if (filter !== '') {
            products = products.filter((product) => {
                let name = product.name.toLowerCase().trim();
                if (name.indexOf(filter) > -1)
                    return true;
                else
                    return false;
            })
        }
        return products;
    }


    render() {
        //product details page
        if (this.props.productReducer.productId > 0) {
            const category = this.props.productReducer.categories.find((category) => (category.id === this.props.productReducer.categoryId));
            const product = category.products.find((product) => (product.id === this.props.productReducer.productId));

            if (this.props.productReducer.isEditing) {
                var name = document.getElementById('editProductName').value.trim();
                var price = document.getElementById('editProductPrice').value.trim();
                var imageURL = document.getElementById('editProductImageURL').value.trim();
                var description = document.getElementById('editProductDescription').value.trim();
            }

            return (
                <div id="main">
                    <Link to={"#"} onClick={() => (this.handleSelectProduct(0))}>&lt;&nbsp;Back to {category.name}</Link>
                    <br /><br />
                    <Image src={product.imageURL} responsive />
                    <br />

                    <FormGroup controlId="editProductName">
                        <ControlLabel>Name</ControlLabel>
                        <FormControl type="text" placeholder="Name" defaultValue={product.name} />
                    </FormGroup>

                    <FormGroup controlId="editProductPrice">
                        <ControlLabel>Price</ControlLabel>
                        <InputGroup>
                            <InputGroup.Addon>$</InputGroup.Addon>
                            <FormControl type="text" placeholder="Price" defaultValue={product.price} />
                        </InputGroup>
                    </FormGroup>

                    <FormGroup controlId="editProductImageURL">
                        <ControlLabel>Image URL</ControlLabel>
                        <FormControl type="text" placeholder="Image URL" defaultValue={product.imageURL} />
                    </FormGroup>

                    <FormGroup controlId="editProductDescription">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl componentClass="textarea" type="text" placeholder="Description" defaultValue={product.description} />
                    </FormGroup>

                    <div style={{ float: "right" }}>
                        <Button className="btn-std" onClick={() => (this.handleSelectProduct(0))} >Back</Button>&nbsp;
                        <Button className="btn-std" bsStyle="warning" onClick={this.handleDeleteOpen} >Delete</Button>&nbsp;
                        <Button className="btn-std" bsStyle="info" onClick={this.handleEditOpen} >Edit</Button>

                    </div>

                    <CUDModal title="Are you sure to edit this product as followed?" submit="Edit"
                        isOpening={this.props.productReducer.isEditing}
                        handleSubmit={this.handleEditSubmit}
                        handleClose={this.handleEditClose}>
                        <div>Name: {name}</div>
                        <div>Price: ${price}</div>
                        <div>ImageURL: {imageURL}</div>
                        <div>Description: {description}</div>

                    </CUDModal>

                    <CUDModal title="Are you sure to delete this product?" submit="Delete"
                        isOpening={this.props.productReducer.isDeleting}
                        handleSubmit={this.handleDeleteSubmit}
                        handleClose={this.handleDeleteClose}>
                        <div>Name: {product.name}</div>
                        <div>Price: ${product.price}</div>
                        <div>ImageURL: {product.imageURL}</div>
                        <div>Description: {product.description}</div>
                    </CUDModal>
                </div>
            );
        }

        //product table page
        else {
            let productTable = '';
            if (this.props.productReducer.categoryId > 0) {
                let products = this.props.productReducer.categories.find((category) => (category.id === this.props.productReducer.categoryId)).products;
                products = this.filterProducts(products, this.props.productReducer.filter)
                productTable = (<ProductTable products={products} handleSelectProduct={this.handleSelectProduct}/>);
            }

            return (
                <div id="main">
                    <h1>Products of </h1>
                    <FormGroup>
                        <FormControl value={this.props.productReducer.categoryId} componentClass="select" onChange={this.handleSelectCategory}>
                            {this.props.productReducer.categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </FormControl>
                    </FormGroup>

                    <Spinner isLoading={this.props.productReducer.isLoading} />

                    <SearchBar handleChange={this.handleSearch} filter={this.props.productReducer.filter} />
                    <Button bsStyle="primary" className="btn-std" onClick={this.handleAddOpen}>Add</Button><br/><br/>

                    {productTable}

                    <CUDModal title="Add a Product" submit="Add"
                        isOpening={this.props.productReducer.isAdding}
                        handleSubmit={this.handleAddSubmit}
                        handleClose={this.handleAddClose}>

                        <FormGroup controlId="addProductName">
                            <FormControl type="text" placeholder="Name" />
                        </FormGroup>

                        <FormGroup controlId="addProductPrice">
                            <InputGroup>
                                <InputGroup.Addon>$</InputGroup.Addon>
                                <FormControl type="text" placeholder="Price" />
                            </InputGroup>
                        </FormGroup>

                        <FormGroup controlId="addProductImageURL">
                            <FormControl type="text" placeholder="Image URL" />
                        </FormGroup>

                        <FormGroup controlId="addProductDescription">
                            <FormControl componentClass="textarea" type="text" placeholder="Description" />
                        </FormGroup>
                    </CUDModal>

                </div >
            );

        }

    };

};

export default ProductMain;