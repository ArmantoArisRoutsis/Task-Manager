import React from 'react'
import ReactDom from 'react-dom'


import {Grow} from "@material-ui/core"
import "./Modal.css"
import Form from "../form/Form"

const ModalOverlay = ({setShowModal}) => {


    const content = (
        <>
            <Grow in>
                <div className="modal">
                    <Form setShowModal={setShowModal}/>
                </div>
            </Grow>
        </>
    );
    return ReactDom.createPortal(content,document.getElementById('modal-hook'))
}


const Modal = ({setShowModal}) => {
    return (
        <>
        <ModalOverlay setShowModal={setShowModal}/>
        </>
    )
}

export default Modal