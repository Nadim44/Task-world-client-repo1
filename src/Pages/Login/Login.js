// import { GoogleAuthProvider } from 'firebase/auth';
// import React, { useContext } from 'react';
// import { Button } from 'react-bootstrap';
// import { FaGoogle } from 'react-icons/fa';
// import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
// import Form from 'react-bootstrap/Form';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const { providerLogin, signIn } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const googleProvider = new GoogleAuthProvider();
//     const handleGoogleSignIn = () => {
//         providerLogin(googleProvider)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user)

//             })
//             .catch(error => console.error(error))
//     }

//     const handleSubmit = event => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         signIn(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 form.reset();
//                 navigate('/')
//             })
//             .catch(error => console.error(error))
//     }



//     return (
//         <div className='mx-auto' style={{ width: '300px' }}>
//             <h2 >Login</h2>
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Control name='email' type="email" placeholder="Enter email" required />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     {/* <Form.Label>Password</Form.Label> */}
//                     <Form.Control name='password' type="password" placeholder="Password" required />
//                 </Form.Group>

//                 <Button variant="primary" type="submit">
//                     Login
//                 </Button>
//                 <Form.Text className="text-muted">

//                 </Form.Text>
//             </Form>

//             <Button className='mt-3' onClick={handleGoogleSignIn} variant='outline-primary'><FaGoogle></FaGoogle> Login with Google</Button>
//         </div>
//     );
// };

// export default Login;


// import React, { useContext } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

// const Register = () => {

//     const { createUser } = useContext(AuthContext);
//     const navigate = useNavigate()

//     const handleSubmit = event => {
//         event.preventDefault();
//         const form = event.target;
//         const name = form.name.value;
//         const photoURL = form.photoURL.value;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(name, photoURL, email, password)

//         createUser(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user)
//                 form.reset();
//                 navigate('/')
//             })
//             .catch(e => console.error(e))
//     }

//     return (
//         <div className='mx-auto' style={{ width: '300px' }}>
//             <h2>Please Register!!</h2>
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3" controlId="formBasicEmail1">

//                     <Form.Control name='name' type="text" placeholder="Your Name" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail2">
//                     <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">

//                     <Form.Control name='email' type="email" placeholder="Enter email" required />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Control name='password' type="password" placeholder="Password" required />
//                 </Form.Group>

//                 <Button variant="primary" type="submit">
//                     Register
//                 </Button>
//                 <Form.Text className="text-muted">

//                 </Form.Text>
//             </Form>


//         </div>
//     );
// };

// export default Register;