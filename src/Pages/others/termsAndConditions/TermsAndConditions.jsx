import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>You have to maintain the rules, otherwise you will be kicked out!</h2>
           <Link to="/register">Go back register</Link>
        </div>
    );
};

export default TermsAndConditions;