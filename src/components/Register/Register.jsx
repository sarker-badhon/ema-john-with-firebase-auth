import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {
    const {createUser}=useContext(AuthContext)

   const handlerRegister =(event)=>{
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


    createUser(email,password)
    .then((result)=>{
        const loggedUser = result.user
        console.log(loggedUser);
        form.reset("")
    })
    .catch((error)=>{
        console.log(error);
    })

   }



    return (
        <div className='form-container'>
        <h2 className='form-title'>Register Please</h2>
        <form onSubmit={handlerRegister} className='form-field'>
        <input type="text" name="name" id="" placeholder='Enter your Name' required />
        <input type="email" name="email" id="" placeholder='Email Address' required />
        <input type="password" name="password" id="" placeholder='Password' />
        <input type="submit" value="Register" />
        </form>
        <div className='socail-btn'>
            <p>
                <small className='style{text-decoration-line: underline;}'>
                   <Link to="/login"> Already have an account?Login</Link>
                </small>
               
            </p>
           
        </div>
    </div>
    );
};

export default Register;