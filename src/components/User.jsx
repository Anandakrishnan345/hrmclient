import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';

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
        <div>
            <h2>User Details</h2>
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
            {/* Add other user details here */}
            <div><button><Link to={`/Update/${user._id}`}>UpdateUser</Link></button></div>
            <div><button><Link to={'changepassword'}>changepassword</Link></button></div>
        </div>
    );
}

export default User;
