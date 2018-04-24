import React from "react";
import { Button, Modal } from "react-bootstrap";

const CUDModal = ({ title, submit, isOpening, handleSubmit, handleClose, children }) => {

    let submitStyle;
    if (submit === "Delete")
        submitStyle = "danger";
    else
        submitStyle = "primary";

    return (
        <Modal show={isOpening} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {children}
            </Modal.Body>

            <Modal.Footer>
                <Button className="btn-std" onClick={handleClose}>Close</Button>
                <Button className="btn-std" bsStyle={submitStyle} onClick={handleSubmit}>{submit}</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CUDModal;