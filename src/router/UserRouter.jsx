import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from '../Pages/Users/UserLogin'
import Home from '../Pages/Users/Home';
function UserRouter() {
  return (
    <>
    <Routes>
      <Route path={'/'} element={<Home/>} />
      <Route path={'login'} element={<UserLogin/>} />
    </Routes>
    </>
  )
}

export default UserRouter