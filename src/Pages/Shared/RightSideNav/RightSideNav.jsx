import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitter, FaTwitch, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from './BrandCarousel/BrandCarousel';
import useAuth from '../../../Hook/Contexts/useAuth/useAuth';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {

  const {googleProviderLogin} = useAuth();

  const googleProvider = new GoogleAuthProvider()

  const handleGoogleSignIn = () =>{
    googleProviderLogin(googleProvider)
   .then(result=>{
    const user = result.user;
    console.log( 'clicked',user);
   })
   .catch((error)=>console.log(error));
  }

    return (
        <>

        <div>
        <ButtonGroup vertical>
        <Button onClick={handleGoogleSignIn} variant="outline-primary" className='my-2'><FaGoogle/> Login with Google</Button>
      <Button variant="outline-primary"><FaGithub/> Login with Github</Button>
    </ButtonGroup>
  <p>Find us on</p>
  <div>
  <ListGroup vertical>
      <ListGroup.Item className="mb-2"><FaFacebook/> Facebook</ListGroup.Item>
      <ListGroup.Item className="mb-2"><FaYoutube/> Youtube</ListGroup.Item>
      <ListGroup.Item className="mb-2"><FaTwitter/> Twitter</ListGroup.Item>
      <ListGroup.Item className="mb-2"><FaTwitch/> Twitch</ListGroup.Item>
      <ListGroup.Item className="mb-2"><FaWhatsapp/> WhatsApp</ListGroup.Item>
    </ListGroup>
  </div>
  <div>
    <BrandCarousel/>
  </div>
        </div>
        </>
    );
};

export default RightSideNav;