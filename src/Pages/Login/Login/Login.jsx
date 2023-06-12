import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useAuth from '../../../Hook/Contexts/useAuth/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {

  const [error, setError] = useState('')

    const {signIn, setLoading} = useAuth()

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit =e=>{
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            const user  = result.user;
            console.log(user);
            form.reset()
            setError('')
            if(user.emailVerified){

              navigate(from, {replace: true})
            }
            else{
              toast.error('please verify your email first befor login your account!')
            }
        })
        .catch(e => 
          {
           setError(e.message)
          })
          .finally(()=>{
            setLoading(false)
          })
    }
    return (
        <React.Fragment>
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Sign In
      </Button>
      <Form.Text className="text-muted">
          {error}
        </Form.Text>
    </Form>
        </React.Fragment>
    );
};

export default Login;