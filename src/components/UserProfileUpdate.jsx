import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import './UpdateUser.css' ;
import Swal from 'sweetalert2';

function UserProfileUpdate() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const [updatedUser, setUpdatedUser] = useState({
        name: '',
        email: '',
        phonenumber: '',
        Address: '',
        pincode: ''
    });

    // Function to fetch user details
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/viewuser/${id}`);
                setUser(response.data.data);
                // Set default values for updatedUser state when user data is fetched
                setUpdatedUser({
                    name: response.data.data.name,
                    email: response.data.data.email,
                    phonenumber: response.data.data.phonenumber,
                    Address: response.data.data.Address,
                    pincode: response.data.data.pincode
                });
            } catch (error) {
                console.error('Failed to fetch user:', error.message);
            }
        };
        fetchUser();
    }, [id]);

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser({ ...updatedUser, [name]: value });
    };

    // Function to update user details
    const updateUser = async () => {
        try {
            const response = await axios.put(`http://localhost:3000/update/${id}`, updatedUser);
            console.log('User details updated successfully:', response.data.message);

            Swal.fire({
                icon: 'success',
                title: 'Success',
                text:  response.data.message,
               
            }).then(()=>{navigate('/admin')})
            // Optionally, you can update the user state with the updated data
            setUser(response.data.data);
        } catch (error) {
            console.error('Failed to update user details:', error.message);
        }
    };

  
    
    
    

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className='update-user'>
            {/* <h2>User Details</h2>
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
            <div>Phone Number: {user.phonenumber}</div>
            <div>Address: {user.Address}</div>
            <div>Pincode: {user.pincode}</div> */}
            <h2 className='heading'>Update User</h2>
            <input className='update-input' type="text" name="name" value={updatedUser.name} onChange={handleInputChange} placeholder="Name" />
            <input className='update-input' type="email" name="email" value={updatedUser.email} onChange={handleInputChange} placeholder="Email" />
            <input className='update-input' type="text" name="phonenumber" value={updatedUser.phonenumber} onChange={handleInputChange} placeholder="Phone Number" />
            <input className='update-input' type="text" name="Address" value={updatedUser.Address} onChange={handleInputChange} placeholder="Address" />
            <input className='update-input' type="text" name="pincode" value={updatedUser.pincode} onChange={handleInputChange} placeholder="Pincode" />
            <button className='update-button' onClick={updateUser}>Update User</button>
        </div>
    );
}

export default UserProfileUpdate;