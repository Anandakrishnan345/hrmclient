import React, { useState } from 'react';
import './Adduser.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function Adduser  () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [Address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const navigate = useNavigate();

    const handleAdduser = async (e) => {
        e.preventDefault();

        try {

            const data = { name, email, password, phonenumber, Address, pincode };
            const json_data = JSON.stringify(data);
            console.log("json_data : ", json_data)

            const response = await axios.post('http://localhost:3000/adduser', {
                name:name,
                email: email,
                password: password,
                phonenumber:phonenumber,
                Address:Address,
                pincode:pincode},
                {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: json_data,
            });
            
            console.log('Response received:', response);


            if (response.data.success) {
                
                alert(response.data.message);
                navigate('/getuser');
               
                
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error('Adding user failed:', error);
            alert(error.response.data)
        }
    }

   

    return (
        <div className='wrapper_add' >
          
            <h2 className='titleuser'>Adduser</h2>
            <form className='wrap-item' onSubmit={handleAdduser}>
                <label htmlFor="name">Enter your Name</label>
                <input type="text" placeholder="Enter your name" name='name' value={name} onChange={(e) => setName(e.target.value)} required/>
                <label htmlFor="name">Enter your email</label>
                <input type="text" placeholder="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label htmlFor="password">Enter Your Password</label>
                <input type="password" placeholder="Password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <label htmlFor="phonenumber">Enter Your Phone Number</label>
                <input type="text" placeholder="Enter Your Phone Number" name="phonenumber" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} required/>

                <label htmlFor="address">Enter Your Address</label>
                <input type="address" placeholder="Enter Your Address" name="Address" value={Address} onChange={(e) => setAddress(e.target.value)} required/>

                <label htmlFor="pincode">Enter Your Pincode</label>
                <input type="pincode" placeholder="Enter Your pincode" name="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} required/>

                <div className='adduser'>
                <button type="submit">Adduser</button>
                
                </div>
                
            </form>
        </div>
    );
};

export default Adduser;