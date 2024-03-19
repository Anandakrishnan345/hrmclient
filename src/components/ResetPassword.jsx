// import React, { useState } from 'react';
// import axios from 'axios';

// function ResetPassword({ token }) {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleResetPassword = async () => {
//     try {
//       if (password !== confirmPassword) {
//         setMessage("Passwords do not match.");
//         return;
//       }

//       const response = await axios.patch('http://localhost:3000/reset-password', { password }, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });

//       setMessage(response.data.message);
//     } catch (error) {
//       if (error.response) {
//         setMessage(error.response.data.message);
//       } else {
//         setMessage(error.message);
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Reset Password</h2>
//       <input
//         type="password"
//         placeholder="Enter new password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Confirm new password"
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//       />
//       <button onClick={handleResetPassword}>Reset Password</button>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default ResetPassword;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
   
    //   storing token in state here
    setToken(token);
  }, []); // Empty dependency array to run this effect only once

  const [token, setToken] = useState('');

  const handleResetPassword = async () => {
    try {
      if (password !== confirmPassword) {
        setMessage("Passwords do not match.");
        return;
      }

      const response = await axios.patch('http://localhost:3000/reset-password', { password }, {
        headers: {
          Authorization: `Bearer ${token}` // Use the token stored in state
        }
      });

      setMessage(response.data.message);
    } catch (error) {
      if (error.response) {
        
        setMessage(error.response.data.message);
      } else {
        setMessage(error.message);
      }
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <input
        type="password"
        placeholder="Enter new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm new password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleResetPassword}>Reset Password</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ResetPassword;
