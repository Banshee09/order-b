import React from "react";
import { Modal } from "react-bootstrap";

const Spinner = ({isLoading}) => {

    return (
        <Modal show={isLoading} dialogComponentClass={Spin} />  
    );

};

const Spin = (props) =>{
    return (
    <div className="in modal" tabIndex="-1" style={{display: "block"}}>
            <div className="spinner"></div>
    </div>
        
    );
}

export default Spinner;