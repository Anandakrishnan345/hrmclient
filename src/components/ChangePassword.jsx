import React, { useState } from 'react';
import axios from 'axios';
import './Changepassword.css'

const ChangePassword = () => {
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChangePassword = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/changepassword/${email}`, {
        oldPassword,
        newPassword
      });
      setMessage(response.data.message);
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div className="main">
    <div className="change-password-container">
    <h2>Change Password</h2>
    <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div>
        <label>Old Password:</label>
        <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
    </div>
    <div>
        <label>New Password:</label>
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
    </div>
    <button className="change-password-button" onClick={handleChangePassword}>Change Password</button>
    {message && <div style={{ color: 'green' }}>{message}</div>}
    {error && <div style={{ color: 'red' }}>{error}</div>}
</div>
</div>
  );
};

export default ChangePassword;
