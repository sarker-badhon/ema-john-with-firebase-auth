import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
const Login = () => {
const [show,setShow]=useState()
    const {signIn,googleSignIn}=useContext(AuthContext)
    const navigate = useNavigate()
    const location =useLocation()
    const from =location.state?.form?.pathname || '/'

    const handlerLogIn =(event)=>{
     event.preventDefault();
     const form=event.target;
     const email = form.email.value;
     const password = form.password.value;
     console.log(email,password);
 
     if(password.length < 8){
         console.log('munimun 8 characters ');
     }
     else{
         console.log('success')
     }

     signIn(email,password)
     .then((result)=>{
        const loggedUser = result.user
        console.log(loggedUser);
        form.reset("")
        navigate(from,{replace:true})
    })
    .catch((error)=>{
        console.log(error);
    })

    }

    const handlerGoogleSignIn =()=>{
        googleSignIn()
        .then((result)=>{
            const loggedUser = result.user
            console.log(loggedUser);
            
            
        })
        .catch((error)=>{
            console.log(error);
        })
    
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login Please</h2>
            <form onSubmit={handlerLogIn} className='form-field'>
            <input type="email" name="email" id="" placeholder='Email Address' required />
            <input type={show?"text":"password"} name="password" id="" placeholder='Password' />
            <p onClick={()=>setShow(!show)}>
                {
                    show? <span>Hide password</span>:
                    <span>show password</span>
                }
            </p>
            <input type="submit" value="Login" />
            </form>
            <div className='socail-btn'>
                <p>
                    <small className='style{text-decoration-line: underline;}'>
                        Do not have an account?
                        <Link to="/register">Register</Link> 
                    </small>
                   
                </p>
                <input onClick={handlerGoogleSignIn} type="submit" value="Continue With Google" />
                
                <input type="submit" value="Continue With GitHub" />
            </div>
        </div>
    );
};

export default Login;