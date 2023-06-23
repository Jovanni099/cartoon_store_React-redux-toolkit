import './App.css'
import { Header } from './components/Header/Header'
import { HomePage } from './pages/HomePage'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux'

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Routes>
            <Route path='/home-page' element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  )
}





