import React, { Component } from 'react';
import './login.css';

class Login extends Component {
render(){
    return(
        <form className='login-form'>
            <div className='form-control'>
                <label htmlFor='email'>E-Mail</label>
                <input type='email' id='email'/>
            </div>
            <div className='form-action'>
                
                <button type='button'>Signup</button>
            </div>     
     </form>
    )
}
}

export default Login;