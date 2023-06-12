import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from "../../Hook/Contexts/useAuth/useAuth";
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()

    if(loading){
       return <>
       <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
       </>
    }
     
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace />
    }
    return children
};

export default PrivateRoutes;
