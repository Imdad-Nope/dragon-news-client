import React from 'react';
import { FaCopyright, FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
    return (
        <React.Fragment>

        <div className='d-flex justify-content-center mb-4'>
            <span><FaRegCopyright/> copyright 2023, allright reserved!</span>
        </div>
        </React.Fragment>
    );
};

export default Footer;