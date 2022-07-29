import React from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import CheckOut from './pages/CheckOut';
import OrderSuccess from './pages/OrderSuccess';
import {Routes,Route} from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/checkOut' element={<CheckOut/>}/>
        <Route path='/orderSuccess' element={<OrderSuccess />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
