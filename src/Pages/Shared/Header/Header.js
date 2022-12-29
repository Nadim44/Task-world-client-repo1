import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Form from 'react-bootstrap/Form';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleKeyUp = event => {
        event.preventDefault()
        const form = event.target;
        const task = form.task.value;
        console.log(task)
        const AddTask = {
            task: task
        }
        console.log(AddTask)
        // save task into the database
        fetch('http://localhost:5000/addTask', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddTask)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                // toast.success('Task added successfully')
                form.reset()
                navigate('/myTask')
            })


    }

    return (
        <div>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Task World</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/addTask">Add Task</Nav.Link>
                            <Nav.Link href="/myTask">My Task</Nav.Link>
                            <Nav.Link href="/completedTask">Completed Task</Nav.Link>
                            <Form onSubmit={handleKeyUp}>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control name='task' type="text" placeholder="Add Task" required />
                                </Form.Group>
                            </Form>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/login">
                                {
                                    user?.uid ?
                                        <>
                                            <span>{user?.displayName}</span>
                                            <Button variant='light' onClick={handleLogOut}>Log Out</Button>
                                        </>
                                        :
                                        <>
                                            <Link to='/login'>Login</Link>
                                            <Link to='/register'>Register</Link>
                                        </>
                                }

                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                {user?.photoURL ?
                                    <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image>
                                    : <FaUser></FaUser>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;