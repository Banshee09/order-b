import React from "react";

const SearchBar = (props) => {

    const field = props.field;
    let placeholder = "Search here"
    if (field !== undefined)
        placeholder += " by " + field;

    return (
        <div className="form-group">
            <input className="form-control" placeholder={placeholder} onChange={props.handleChange} value={props.filter}/>
        </div>
    );
}

export default SearchBar;