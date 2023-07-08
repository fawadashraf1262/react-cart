import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Shop from './Pages/Shops/shop';
import Cart from './pages/cart/cart';
import ContextProvider from './context/shop-context';
const App = () => {
  return (
    <div className="App">
      <ContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
      </ContextProvider>
    </div>
  )
}

export default App