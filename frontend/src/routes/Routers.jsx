// import React from 'react'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Doctors from '../pages/Doctors'
// import DoctorDetails from '../pages/Doctors/DoctorDetails'
import Patients from '../pages/Patients'
// import PatientDetails from '../pages/Patients/PatientDetails'
import Records from '../pages/Doctors'

import {Routes, Route} from 'react-router-dom'
const Routers = () => {
  return <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/doctors' element={<Doctors/>}/>
    {/* <Route path='/doctors/:id' element={<Home/>}/> */}
    <Route path='/patients' element={<Patients/>}/>
    {/* <Route path='/patients/:id' element={<Home/>}/> */}
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Signup/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/my-records' element={<Records/>}/>
    </Routes>
};

export default Routers;