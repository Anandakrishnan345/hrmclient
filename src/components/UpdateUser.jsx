// import React, { useEffect, useState } from 'react';
// import './Adduser.css';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';

// function UpdateUser() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phonenumber, setPhonenumber] = useState('');
//   const [Address, setAddress] = useState('');
//   const [pincode, setPincode] = useState('');
//   const navigate = useNavigate();
//   const [data, setData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     phonenumber: '',
//     Address: '',
//     pincode: '',
//   });
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/viewuser/${id}`);
//         console.log('Response:', response);
//         setData(response.data.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, [id]);

//   const [errors, setErrors] = useState({});

//   const validators = {
//     name: (value) => {
//         if (!value.trim()) {
//           return 'Name is required';
//         } else if (value.length < 3 || value.length > 30) {
//           return 'Name should be between 3 and 30 characters';
//         } else if (!/^[A-Za-z]+$/.test(value)) {
//           return 'Name should not contain numbers or special characters';
//         }
//         return '';
//       },
//       email: (value) => {
//         if (!value.trim()) {
//           return 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(value)) {
//           return 'Invalid email address';
//         }
//         return '';
//       },
//       password: (value) => {
//         if (!value.trim()) {
//           return 'Password is required';
//         } else if (value.length < 6) {
//           return 'Password must be at least 6 characters';
//         }
//         return '';
//       },
//       phonenumber: (value) => {
//         if (!value.trim()) {
//           return 'Phone number is required';
//         } else if (!/^\d{10}$/.test(value)) {
//           return 'Invalid phone number';
//         }
//         return '';
//       },
//       Address: (value) => {
//         if (!value.trim()) {
//           return 'Address is required';
//         }
//         return '';
//       },
//       pincode: (value) => {
//         if (!value.trim()) {
//           return 'Pincode is required';
//         } else if (!/^\d{6}$/.test(value)) {
//           return 'Invalid pincode';
//         }
//         return '';
//       },
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     const error = validators[name](value);

//     setErrors({ ...errors, [name]: error });
//     // Directly update state based on the input name
//     name === 'name' && setName(value);
//     name === 'email' && setEmail(value);
//     name === 'password' && setPassword(value);
//     name === 'phonenumber' && setPhonenumber(value);
//     name === 'Address' && setAddress(value);
//     name === 'pincode' && setPincode(value);
//   };

//   const handleUpdateuser = async (e) => {
//     try {
//       e.preventDefault();

//       // Final validation before submitting the form
//       const newErrors = {};

//       // Add final validation checks similar to your existing logic

//       if (Object.keys(newErrors).length > 0) {
//         setErrors(newErrors);
//         return;
//       }

//       // API request to update the user
//       const response = await axios.put(
//         `http://localhost:3000/update/${id}`,
//         {
//           name,
//           email,
//           password,
//           phonenumber,
//           Address,
//           pincode,
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       console.log('reached here...');
//       console.log('success', response.data.success);

//       if (response.data.success) {
//         alert(response.data.message);
//         navigate('/viewuser');
//         return;
//       } else {
//         alert(response.data.message);
//         return;
//       }
//     } catch (error) {
//       console.error('Updating user failed:', error);
//       alert(error.response.data.message);
//     }
//   };

//   return (
//     <div className='wrapper_add'>
//       <h2 className='titleuser'>UpdateUser</h2>
//       <form className='wrap-item' onSubmit={handleUpdateuser}>
       
//         <label htmlFor='name'>Enter your Name</label>
//         <input
//           type='text'
         
//           name='name'
//           value={data.name}
//           onChange={handleInputChange}
//           required
//         />
//         <span className='error-message'>{errors.name}</span>

//         <label htmlFor='email'>Email</label>
//         <input
//           type='text'
          
//           name='email'
//           value={data.email}
//           onChange={handleInputChange}
//           required
//         />
//         <span className='error-message'>{errors.email}</span>

//         <label htmlFor='password'>password</label>
//         <input
//           type='text'
         
//           name='password'
//           value={data.password}
//           onChange={handleInputChange}
//           required
//         />
//         <span className='error-message'>{errors.password}</span>

//         <label htmlFor='phonenumber'>phonenumber</label>
//         <input
//           type='text'
          
//           name='phonenumber'
//           value={data.phonenumber}
//           onChange={handleInputChange}
//           required
//         />
//         <span className='error-message'>{errors.phonenumber}</span>

//         <label htmlFor='name'>Address</label>
//         <input
//           type='text'
         
//           name='name'
//           value={data.Address}
//           onChange={handleInputChange}
//           required
//         />
//         <span className='error-message'>{errors.Address}</span>

//         <label htmlFor='pincode'>Enter your pincode</label>
//         <input
//           type='text'
         
//           name='pincode'
//           value={data.pincode}
//           onChange={handleInputChange}
//           required
//         />
//         <span className='error-message'>{errors.pincode}</span>

//         {/* Repeat similar input fields for other properties (email, password, etc.) */}
        
//         <div className='adduser'>
//           <button type='submit'>update</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default UpdateUser;
// ... (previous imports)


import React, { useEffect, useState } from 'react';
import './Adduser.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [Address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    phonenumber: '',
    Address: '',
    pincode: '',
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/viewuser/${id}`);
        console.log('Response:', response);
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);

  const [errors, setErrors] = useState({});

  const validators = {
    name: (value) => {
      if (!value.trim()) {
        return 'Name is required';
      } else if (value.length < 3 || value.length > 30) {
        return 'Name should be between 3 and 30 characters';
      } else if (!/^[A-Za-z]+$/.test(value)) {
        return 'Name should not contain numbers or special characters';
      }
      return '';
    },
    email: (value) => {
      if (!value.trim()) {
        return 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        return 'Invalid email address';
      }
      return '';
    },
    password: (value) => {
      if (!value.trim()) {
        return 'Password is required';
      } else if (value.length < 6) {
        return 'Password must be at least 6 characters';
      }
      return '';
    },
    phonenumber: (value) => {
      if (!value.trim()) {
        return 'Phone number is required';
      } else if (!/^\d{10}$/.test(value)) {
        return 'Invalid phone number';
      }
      return '';
    },
    Address: (value) => {
      if (!value.trim()) {
        return 'Address is required';
      }
      return '';
    },
    pincode: (value) => {
      if (!value.trim()) {
        return 'Pincode is required';
      } else if (!/^\d{6}$/.test(value)) {
        return 'Invalid pincode';
      }
      return '';
    },
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const error = validators[name](value);

    setErrors({ ...errors, [name]: error });

    // Update state directly with new values
    name === 'name' && setName(value);
    name === 'email' && setEmail(value);
    name === 'password' && setPassword(value);
    name === 'phonenumber' && setPhonenumber(value);
    name === 'Address' && setAddress(value);
    name === 'pincode' && setPincode(value);
  };

  const handleUpdateuser = async (e) => {
    try {
      e.preventDefault();

      // Final validation before submitting the form
      const newErrors = {};

      // Add final validation checks similar to your existing logic

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      // API request to update the user
      const response = await axios.put(
        `http://localhost:3000/update/${id}`,
        {
          name,
          email,
          password,
          phonenumber,
          Address,
          pincode,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('reached here...');
      console.log('success', response.data.success);

      if (response.data.success) {
        alert(response.data.message);
        navigate('/getuser');
        return;
      } else {
        alert(response.data.message);
        return;
      }
    } catch (error) {
      console.error('Updating user failed:', error);
      alert(error.response.data.message);
    }
  };

  // Ensure data has been loaded before rendering
  if (!data._id) {
    return <div>Loading...</div>;
  }

  return (
    <div className='wrapper_add'>
      <h2 className='titleuser'>UpdateUser</h2>
      <form className='wrap-item' onSubmit={handleUpdateuser}>
        <label htmlFor='name'>Enter your Name</label>
        <input
          type='text'
          name='name'
          value={data.name}
          onChange={handleInputChange}
          required
        />
        <span className='error-message'>{errors.name}</span>

        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          value={data.email}
          onChange={handleInputChange}
          required
        />
        <span className='error-message'>{errors.email}</span>

        <label htmlFor='password'>Password</label>
        <input
          type='text'
          name='password'
          value={data.password}
          onChange={handleInputChange}
          required
        />
        <span className='error-message'>{errors.password}</span>

        <label htmlFor='phonenumber'>Phone Number</label>
        <input
          type='text'
          name='phonenumber'
          value={data.phonenumber}
          onChange={handleInputChange}
          required
        />
        <span className='error-message'>{errors.phonenumber}</span>

        <label htmlFor='address'>Address</label>
        <input
          type='text'
          name='Address'
          value={data.Address}
          onChange={handleInputChange}
          required
        />
        <span className='error-message'>{errors.Address}</span>

        <label htmlFor='pincode'>Pincode</label>
        <input
          type='text'
          name='pincode'
          value={data.pincode}
          onChange={handleInputChange}
          required
        />
        <span className='error-message'>{errors.pincode}</span>

        <div className='adduser'>
          <button type='submit'>Update</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateUser;


