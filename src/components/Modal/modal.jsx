
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

    const Modales = ({show, handleClose, descrip,name }) => {
    return (
        <>

        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{descrip}</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
    }

export {Modales};

