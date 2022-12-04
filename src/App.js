import React from 'react'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'

import HomePage from './Components/Home'
import IncorrectPaswordPage from './Components/Incorrect'
import LoginPage from './Components/Login'
import Register from './Components/Register'


import './App.css'

export default function App() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/Incorrect-password" element={<IncorrectPaswordPage />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </div>

    )
}
