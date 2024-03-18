import React from 'react'
// import Final from './components/Final'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
// import Adduser from './components/Adduser'
// import Login from './components/Login'
// import LandRouting from './components/LandRouting'
// import Land_nav from './components/Land_nav'
// import Land_footer from './components/Land_footer'

import Final from './components/Final';
import Login from './components/Login';
import Adduser from'./components/Adduser';
import AdminOnline from './components/AdminOnline';
import Getuser from './components/Getuser';
import ViewUser from './components/ViewUser';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';
import ResetPassword from './components/ResetPassword';





function App() {
  return (
    <Router>
      <div>   
        <Routes>
          <Route path="/" exact element={<Final />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/adduser" exact element={<Adduser/>} />
          <Route path="/admin" exact element ={<AdminOnline/>}/>
          <Route path="/getuser" exact element={<Getuser/>}/>
          <Route path='/viewuser/:id' exact element={<ViewUser/>}/>
          <Route path='/Update/:id' exact element={<UpdateUser/>}/>
          <Route path='/delete/:id' exact element={<DeleteUser/>}/>
          <Route path='/reset-password' exact element={<ResetPassword/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
