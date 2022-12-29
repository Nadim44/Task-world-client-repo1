import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AddTask = () => {
    // const { handleSubmit } = useForm();
    const navigate = useNavigate()
    const imageHostKey = process.env.REACT_APP_imgbb_key
    // console.log(imageHostKey)
    const handleAddTask = event => {
        event.preventDefault()
        const form = event.target;
        const task = form.task.value;
        const image = form.image.value;
        // console.log(task, image)
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData)
                const AddTask = {
                    task: task
                }
                console.log(AddTask)
                // save task into the database
                fetch('https://task1-server.vercel.app/addTask', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(AddTask)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        toast.success('Task added successfully')
                        form.reset()
                        navigate('/myTask')
                    })

            })
    }

    return (
        <div className='mx-auto' style={{ width: '300px' }}>
            <h2>Add Task</h2>
            <Form onSubmit={handleAddTask}>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control name='task' type="text" placeholder="Add Task" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control name='image' type="file" placeholder="image" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Text className="text-muted">

                </Form.Text>
            </Form>


        </div>
    );
};

export default AddTask;