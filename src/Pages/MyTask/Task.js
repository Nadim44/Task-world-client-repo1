import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Task = ({ myTask, index, modalData, successAction }) => {
    const { task } = myTask;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Card>
                {/* <Card.Header as="h5">Featured</Card.Header> */}
                <Card.Body>
                    <Card.Title>Task: {index + 1}</Card.Title>
                    <Card.Text>
                        {task}
                    </Card.Text>
                    {/* <Button variant="danger">Delete</Button> */}

                    <>
                        <Button variant="primary" onClick={handleShow}>
                            Delete
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

export default Task;