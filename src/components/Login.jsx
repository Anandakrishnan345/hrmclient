import React, { useState } from 'react';
import './Login.css'

import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios';



function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});// validation error
 

    const handleSubmit = async (e) => {
      e.preventDefault();
      const newErrors = {};
      if (!email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'Invalid email address';
      }
      if (!password.trim()) {
        newErrors.password = 'Password is required';
      } else if (password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
        }
      if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
         return;
        }

      try {
          const response = await axios.post('http://localhost:3000/login', {
              email: email,
              password: password
          }, {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json'
              }
          });

         

          if (response.data.success) {
              const token = response.data.data;
              localStorage.setItem('token', token);
              // navigate('/admin');
              // alert(response.data.message);

              Swal.fire({
                icon: "success",
                text: response.data.message,
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              }).then(()=>{navigate('/admin')})

              return;
          } else {
              // alert(response.data.message);
              Swal.fire({
                icon: "error",
                text: response.data.message,
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
              return;
          }


      } catch (error) {
          console.error('Login failed:', error);
          // alert(error.response.data.message);
          Swal.fire({
            icon: "error",
            text: error.response.data.message,
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
      }
  };
    
   

    return (
        <div className='wrapper' >
          
            
            <form className='wrap-item' onSubmit={handleSubmit}>
            <h2 className='title'>Login</h2>
                <label htmlFor="name">Enter your email</label>
                <input type="email" placeholder="email" id="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <span className='error-message'>{errors.email}</span>
                <label htmlFor="password">Enter Your Password</label>
                <input type="password" placeholder="Password" name='password' id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <span className='error-message'>{errors.password}</span>
                <div className='adduser'>
                 
                 <button type='submit'>Login</button>
                
                </div>
                <div>
                  {/* doesn't have an account <Link to="/adduser">Signup</Link> */}
                </div>
                
            </form>
        </div>
    );
};

export default Login;
