import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';
import './User.css'

function User() {
    const [user, setUser] = useState(null);
    const { id } = useParams();
    

    useEffect(() => {
        const fetchUser = async () => {
            try {
                console.log("id",id)
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:3000/viewuser/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log('response',response);
                setUser(response.data.data);
            } catch (error) {
                console.error('Failed to fetch user:', error);
            }
        };

        fetchUser();
    }, [id]);
   

    if (!user) {
        return <div>Loading...</div>;
    }
    
    return (
        <nav className="user-info-navbar">
            <div className="user-info">
                <div>Name: {user.name}</div>
                <div>Email: {user.email}</div>
                {/* Add other user details here */}
            </div>
            <div className="user-actions">
                <button className="button"><Link to={`/Update/${user._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>UpdateUser</Link></button>
                <button className="button"><Link to={'changepassword'} style={{ textDecoration: 'none', color: 'inherit' }}>Change Password</Link></button>
            </div>
        </nav>
    );
}

export default User;
