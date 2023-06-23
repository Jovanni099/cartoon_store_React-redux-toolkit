import './App.css'
import { Header } from './components/Header/Header'
import { HomePage } from './pages/HomePage'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/home-page' element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}





