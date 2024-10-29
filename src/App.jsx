import { useState } from 'react'
// import {Br} from 
import HomePage from './component/HomePage'
import LandingPage from './component/LandingPage'
import LoginPage from './component/LoginPage'
import SignupPage from './component/SignupPage'
import './App.css'

function App() {

  return (
    <>
    <div>
      <HomePage/>
      <LandingPage/>
      <LoginPage/>
      <SignupPage/>
    </div>
    </>
  )
}

export default App
