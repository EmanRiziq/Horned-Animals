import React from 'react';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorited: 0
        }
    }


    render() {
        return (
<>
            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Horn Beast</Modal.Title>
                </Modal.Header>
                <Modal.Body>This is est Modal</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                   
                </Modal.Footer>
            </Modal> */}
            </>
        )
    }
}
export default SelectedBeast;