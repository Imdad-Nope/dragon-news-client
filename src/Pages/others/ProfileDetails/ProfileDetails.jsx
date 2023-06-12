import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useAuth from '../../../Hook/Contexts/useAuth/useAuth';


const ProfileDetails = () => {
  const {user} = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const photo = useRef(user.photoURL)

  const handleSubmit = e =>{
    e.preventDefault()
    // console.log(e.target.value);
    console.log(photo.current.value);
    
  }

  const handleOnChange = e =>{
    setName(e.target.value);

  }
  const handleOnEmail = e =>{
    setEmail(e.target.value);

  }
    return (
        <div>
            <h1>This is Your Profile broh!!</h1>
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Email address</Form.Label>
        <Form.Control onChange={handleOnEmail} defaultValue={user.email} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your Name</Form.Label>
        <Form.Control onChange={handleOnChange}  defaultValue={user.displayName} type="name" placeholder="Your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your PhotoURL</Form.Label>
        <Form.Control ref={photo} defaultValue={user.photoURL} type="name" placeholder="Your photoUrl" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    );
};

export default ProfileDetails;