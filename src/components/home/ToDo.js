import React from "react";

const ToDo = (props) => {
    return (
        <div>
        <br/><hr/>    
        <h1>Outstanding Issues</h1>
        <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Priority</th>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className ="danger">
                            <td >High</td>
                            <td>Enhancement</td>
                            <td>Create a separate handler for search in Add Offer</td>
                        </tr>


                        <tr className ="info">
                            <td>Medium</td>
                            <td>Enhancement</td>
                            <td>Enforce foreign keys referencing</td>
                        </tr>
                        <tr className ="info">
                            <td>Medium</td>
                            <td>Enhancement</td>
                            <td>Add sorting in offers</td>
                        </tr>


                        <tr>
                            <td>Low</td>
                            <td>Enhancement</td>
                            <td>Enforce uniqueness of offers (productId + storeId)</td>
                        </tr>
                        <tr>
                            <td>Low</td>
                            <td>Enhancement</td>
                            <td>Enforce uniqueness of category names and product names</td>
                        </tr>
                        <tr>
                            <td>Low</td>
                            <td>Enhancement</td>
                            <td>Create back buttons for products and offers pages</td>
                        </tr>


                        
                    </tbody>
                </table>
            </div>

        <h1>New Features Proposal</h1>
        <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>User Permission</td>
                            <td>
                                1. Admin: CRUD categories, products, stores<br/>
                                2. Authenticated Store Representative： CRUD offers<br/>
                                3. Others: Read Only Access to categories, products, stores and offers.
                            </td>
                        </tr>

                        <tr>
                            <td>Product Details</td>
                            <td>
                                1. A Photo can be attached to a product.<br/>
                                2. The specification of products should be rocorded in different attributes.<br/>
                                3. Intoduce barcode to uniquely identify a product.
                            </td>    
                        </tr>

                        <tr>
                            <td>Qucik Search</td>
                            <td>
                                1. Users can search a product and its offers by name.<br/>
                                2. Users can search a product and its offers by barcode.<br/>
                                3. The barcode can be entered by phone camera or photos.
                            </td>    
                        </tr>

                        
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ToDo;