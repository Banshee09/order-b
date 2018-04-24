import React from "react";
import { Button } from "react-bootstrap";

const CategoryRow = ({category, handleEditOpen, handleDeleteOpen}) => {
    
    return (
        <tr>
            <td>
                {category.name}
            </td>
            <td align='right'>
                <Button bsStyle="info" className="btn-std" onClick={() => handleEditOpen(category)}>Edit</Button>&nbsp;
                <Button bsStyle="warning" className="btn-std" onClick={() => handleDeleteOpen(category)}>Delete</Button>
            </td>
        </tr>
    );
}

export default CategoryRow;