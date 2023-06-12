
import React, { createContext } from 'react';
import useFirebase from '../../Firebase/useFirebase/useFirebase';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const allContexts =useFirebase();
    return (
        <React.Fragment>
            <AuthContext.Provider value={allContexts}>
                {children}
            </AuthContext.Provider>
        </React.Fragment>
    );
};

export default AuthProvider;