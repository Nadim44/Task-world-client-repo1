import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFormAction } from 'react-router-dom';

const AddTask = () => {
    // const { handleSubmit } = useFormAction()
    // const handleAddTask = data => {
    //     da
    //     console.log(data)
    // }
    const handleSubmit = data => {
        console.log(data)
    }
    return (
        <div>
            <h3>Add Task here!!</h3>
            <Form onSubmit={handleSubmit}>
                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group> */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Add task</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    );
};

export default AddTask;