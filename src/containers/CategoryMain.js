import React, { Component } from "react";
import { FormControl, FormGroup, Button } from "react-bootstrap";

import Spinner from "../components/common/Spinner";
import SearchBar from "../components/common/SearchBar";
import CategoryTable from "../components/category/CategoryTable";
import CUDModal from "../components/common/CUDModal";

class CategoryMain extends Component {

    componentDidMount() {
        this.props.categoryDispatcher.loadCategories();
    }

    handleAddOpen = () => {
        this.props.categoryDispatcher.addCategoryOpen();
    };

    handleAddClose = () => {
        this.props.categoryDispatcher.addCategoryClose();
    }

    handleAddSubmit = () => {
        const name = document.getElementById('addCategoryName').value.trim();
        const category = { name: name };
        this.props.categoryDispatcher.addCategory(category);
        this.props.categoryDispatcher.addCategoryClose();
    }

    handleEditOpen = (category) => {
        this.props.categoryDispatcher.editCategoryOpen(category);
    };

    handleEditClose = () => {
        this.props.categoryDispatcher.editCategoryClose();
    }

    handleEditSubmit = () => {
        const newName = document.getElementById('editCategoryName').value.trim();
        const oldName = this.props.categoryReducer.category.name;

        if (newName !== '' && newName !== oldName) {
            const category = Object.assign({}, this.props.categoryReducer.category, { name: newName });
            this.props.categoryDispatcher.editCategory(category.id, category);
        }

        this.props.categoryDispatcher.editCategoryClose();
    }

    handleDeleteOpen = (category) => {
        this.props.categoryDispatcher.deleteCategoryOpen(category);
    };

    handleDeleteClose = () => {
        this.props.categoryDispatcher.deleteCategoryClose();
    }

    handleDeleteSubmit = () => {
        const categoryId = this.props.categoryReducer.category.id;
        this.props.categoryDispatcher.deleteCategory(categoryId);
        this.props.categoryDispatcher.deleteCategoryClose();
    };

    handleSearch = (event) => {
        this.props.categoryDispatcher.setCategoryFilter(event.target.value);
    }

    filterCategories = (categories, filter) => {
        if (filter !== '') {
            return categories.filter((category) => {
                let name = category.name.toLowerCase().trim();
                if (name.indexOf(filter) > -1)
                    return true;
                else
                    return false;
            })
        }
        else
            return categories;
    }

    render() {

        const categories = this.filterCategories(this.props.categoryReducer.categories,
            this.props.categoryReducer.filter.toLowerCase().trim());

        return (
            <div id="main">

                <h1>Categories</h1>
                <Spinner isLoading={this.props.categoryReducer.isLoading} />

                <SearchBar filter={this.props.categoryReducer.filter} handleChange={this.handleSearch} />
                <Button bsStyle="primary" className="btn-std" onClick={this.handleAddOpen}>Add</Button><br/><br/>

                <CategoryTable categories={categories}
                    handleEditOpen={this.handleEditOpen}
                    handleDeleteOpen={this.handleDeleteOpen} />

                <CUDModal title="Add a Category" submit="Add"
                    isOpening={this.props.categoryReducer.isAdding}
                    handleSubmit={this.handleAddSubmit}
                    handleClose={this.handleAddClose}>

                    <FormGroup>
                        <FormControl type="text" id="addCategoryName" placeholder="Name" />
                    </FormGroup>

                </CUDModal>

                <CUDModal title="Edit a Category" submit="Edit"
                    isOpening={this.props.categoryReducer.isEditing}
                    handleSubmit={this.handleEditSubmit}
                    handleClose={this.handleEditClose}>

                    <FormGroup>
                        <FormControl type="text" id="editCategoryName" placeholder="Name"
                            defaultValue={this.props.categoryReducer.category.name} />
                    </FormGroup>

                </CUDModal>

                <CUDModal title="Are you sure to delete this category?" submit="Delete"
                    isOpening={this.props.categoryReducer.isDeleting}
                    handleSubmit={this.handleDeleteSubmit}
                    handleClose={this.handleDeleteClose}>

                    <FormGroup>
                        <div>{this.props.categoryReducer.category.name}</div>
                    </FormGroup>

                </CUDModal>

            </div>
        );
    }

};

export default CategoryMain;