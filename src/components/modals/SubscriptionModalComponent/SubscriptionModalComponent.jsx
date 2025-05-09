import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import SubscriptionFormComponent from "../../forms/SubscriptionFormComponent/SubscriptionFormComponent";

function SubscriptionModaComponent({ content }) {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false)

    return (
        <Modal show={show}>
            <Modal.Header closeButton>
                <Modal.Title>📝 Signup to go online</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <SubscriptionFormComponent></SubscriptionFormComponent>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Registrar 
                </Button>
            </Modal.Footer>
        </Modal>

    )
}

export default SubscriptionModaComponent