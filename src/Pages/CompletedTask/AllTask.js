import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const AllTask = ({ myTask, index, modalData, successAction }) => {
    const { task } = myTask;
    const navigate = useNavigate()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleNotCompleted = event => {
        navigate('/myTask')
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>Task: {index + 1}</Card.Title>
                    <Card.Text>
                        {task}
                    </Card.Text>

                    <>
                        <Button variant="danger" onClick={handleShow}>
                            Delete
                        </Button>
                        <Button variant="success" >
                            Completed
                        </Button>
                        <Button variant="primary" onClick={handleNotCompleted} >
                            Not Completed
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Are you sure you want to delete?</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>If you delete this task. It cannot be undone.</Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={() => successAction(myTask)}>
                                    Delete
                                </Button>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cancel
                                </Button>

                            </Modal.Footer>
                        </Modal>
                    </>

                </Card.Body>
            </Card>

        </div>
    );
};

export default AllTask;