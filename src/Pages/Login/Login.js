import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { providerLogin, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)

            })
            .catch(error => console.error(error))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/')
            })
            .catch(error => console.error(error))
    }



    return (
        <div className='mx-auto' style={{ width: '300px' }}>
            <h2 >Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-muted">

                </Form.Text>
            </Form>

            <Button className='mt-3' onClick={handleGoogleSignIn} variant='outline-primary'><FaGoogle></FaGoogle> Login with Google</Button>
        </div>
    );
};

export default Login;
