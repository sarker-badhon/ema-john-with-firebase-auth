import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {
    const { user,logOut } = useContext(AuthContext)


    const handlerLogOut=()=>{
        logOut()
        .then((result)=>{
            const loggedUser=result.user;
            console.log(loggedUser);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                {
                    user ? <button onClick={handlerLogOut} type="submit">Log Out</button>
                        : <Link to="/login">login</Link>

                }
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>


            </div>
        </nav>
    );
};

export default Header;