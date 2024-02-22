import React, { useState } from 'react';
import './Login.css'
// import { BrowserRouter as Link,Route,Router } from 'react-router-dom';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';


const Login = () => {
    const [username, setEmail] = useState('');
    const [password, setPassword] = useState('');

   

    return (
        <div className='wrapper' >
          
            
            <form className='wrap-item'>
            <h2 className='title'>Login</h2>
                <label htmlFor="name">Enter your email</label>
                <input type="text" placeholder="email" name='name' value={username} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Enter Your Password</label>
                <input type="password" placeholder="Password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />

                <div className='adduser'>
                 
                 <button><Link to ={'/adduser'}>Login</Link> </button>
                
                </div>
                
            </form>
        </div>
    );
};

export default Login;