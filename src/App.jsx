import './App.css'
import { Header } from './components/Header/Header'
import { HomePage } from './pages/HomePage'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux'
import { CartoonPage } from './components/CartoonPage/CartoonPage'
import { CartMenu } from './components/CartMenu/CartMenu'
import { OrderPage } from './components/OrderPage/OrderPage'

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Routes>
            <Route path='/home-page' element={<HomePage />} />
            <Route path='/app/:title' element={<CartoonPage />} />
            <Route path='/order' element={<OrderPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  )
}





