import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from '../Pages/Users/UserLogin'
function UserRouter() {
  console.log("user");
  return (
    <>
    <Routes>
      <Route path={'/'} element={<UserLogin/>} />
    </Routes>
    </>
  )
}

export default UserRouter