import React from 'react';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (

            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src= {this.props.selectedBeast.image_url} alt={this.props.selectedBeast.title}></img>
                    {this.props.selectedBeast.description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        )
    }
}
export default SelectedBeast;