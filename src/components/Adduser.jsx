import React, { useState } from 'react';
import './Adduser.css';



function Adduser  () {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

   

    return (
        <div className='wrapper_add' >
          
            <h2>Adduser</h2>
            <form className='wrap-item'>
                <label htmlFor="name">Enter your Name</label>
                <input type="text" placeholder="Enter your name" name='name' value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="name">Enter your email</label>
                <input type="text" placeholder="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Enter Your Password</label>
                <input type="password" placeholder="Password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />

                <div className='adduser'>
                <button type="submit">Adduser</button>
                
                </div>
                
            </form>
        </div>
    );
};

export default Adduser;