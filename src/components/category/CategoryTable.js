import React from "react";
import { Button } from "react-bootstrap";

import CategoryRow from "./CategoryRow";
import SearchBar from "../common/SearchBar";

const CategoryTable = ({ categories, handleEditOpen, handleDeleteOpen }) => {

    return (
        <div>
            <table className="table table-hover table-striped">
                <thead>
                </thead>
                <tbody>
                    {categories.map((category) => {
                        return <CategoryRow key={category.id} category={category}
                            handleEditOpen={handleEditOpen} handleDeleteOpen={handleDeleteOpen} />
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default CategoryTable;