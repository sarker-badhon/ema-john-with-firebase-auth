import React, { useContext } from 'react';
import './PrivateRouter.css'
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location = useLocation()
    console.log(location);
    if(loading){
        return <h3 className='page-loading'>Loading......</h3>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRouter;