
import {Routes,Route} from "react-router-dom"
import React from 'react'
import Home from "../Pages/Home/Home"
import { Profile } from "../Pages/profile/Profile"


const Router1 = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={Home}></Route>
            <Route path="/login" element={Profile}></Route>
        </Routes>
    </div>
  )
}

export default Router1