import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useAuth from '../../../Hook/Contexts/useAuth/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Register = () => {

    const {signUp, updateUsersProfile, verifyEmail} = useAuth()
    const [error, setError] = useState('');
    const [accept, setAccept] = useState(false)

    const navigate = useNavigate();
    
    const handleSubmit = e =>{
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        // console.log(name, email, photoURL, password);
        signUp(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('')
            navigate('/')
            form.reset()
            handleUpdateUsers(name, photoURL);
            handleVerifyEmail();
            toast.success('Please verify your email address befor login your account')
        })
        .catch(e => {
          setError(e.message)
        })
    };


    //verify Email ----

    const handleVerifyEmail = () =>{
      verifyEmail()
      .then(() =>{})
      .catch(error=> console.error(error))
    }

    // Update your profile ------

    const handleUpdateUsers = (name, photoURL) =>{
      const profile = {
        displayName: name, 
        photoURL: photoURL
      }
      updateUsersProfile(profile)
      .then(()=>{})
      .catch(error=>console.log(error));
    }

    // Check button --------
    const handleCheckClick = e =>{
     setAccept(e.target.checked)
    }
    return (
        <React.Fragment>
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="name" placeholder="Enter Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter Your email" required />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Your photo</Form.Label>
        <Form.Control type="text" name="photoURL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        type="checkbox" 
        onClick={handleCheckClick}
        label={<> Accept
        <Link to="/terms"> terms & conditions</Link></>}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accept}>
        Sign Up
      </Button>
      <Form.Text className="text-muted" style={{fontSize: '30px'}}>
       <span className='text-danger'>{error}</span>
        </Form.Text>
    </Form>
        </React.Fragment>
    );
};

export default Register;