import React, { useState } from 'react';
import './Login.css'
// import { BrowserRouter as Link,Route,Router } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const response = await axios.post('http://localhost:3000/login', {
    //             email,
    //             password
    //         });

    //         if (response.data.success) {
    //             // Successful login
    //             alert("Login successful!");
    //             console.log("Login successful!");
    //             navigate('/adduser');

    //         } else {
    //             // Unsuccessful login
    //             alert("Login failed. Invalid email or password.");
    //             console.log("Login failed. Invalid email or password.");
    //         }
    //     } 
    //     // catch (error) {
    //     //     console.error("An error occurred during login:", error.message);
    //     //     alert("An error occurred. Please try again later.");
    //     //     console.error("An error occurred during login:", error.message);
    //     // }
    //     catch (error) {
    //         console.error("An error occurred during login:", error);
    //         console.log("Axios response:", error.response);
    //         alert("An error occurred. Please try again later.");}
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
          console.log("entered in try")
          const response = await axios.post('http://localhost:3000/login', {
            email,
            password
          });
      
          console.log(' response:', response.data.message);
      
          if (response.data.success) {
            
            console.log(response.data.message)
            console.log('Login successful!');
            const token = response.data.data;
            localStorage.setItem('token',token);
            alert(response.message)
            navigate('/adduser');
            
          } else {
            
            alert(response.data.message);
            console.log('Login failed. Invalid email or password.');
          }
        } catch (error) {
          
          console.log("entered in catch")
          console.error('An error occurred during login:', error);
          alert('An error occurred. Please try again later.');
        }
      };
      
    
   

    return (
        <div className='wrapper' >
          
            
            <form className='wrap-item' onSubmit={handleSubmit}>
            <h2 className='title'>Login</h2>
                <label htmlFor="name">Enter your email</label>
                <input type="text" placeholder="email" id="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Enter Your Password</label>
                <input type="password" placeholder="Password" name='password' id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <div className='adduser'>
                 
                 <button type='submit'>Login</button>
                
                </div>
                
            </form>
        </div>
    );
};

export default Login;