 import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap' ;
import {BrowserRouter, Routes,  Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import OrdersScreen from './screens/OrdersScreen';
import Restaurant from './components/Restaurant/Restaurant';

function App() {
  return (
    <div className="App">
        
     <BrowserRouter>
        <Routes>
        <Route path="/"  element={<Restaurant />} />
        <Route path="/product"  element={<HomeScreen />} />
        <Route path="/cart"  element={<CartScreen />} />
        <Route path="/register"  element={<RegisterScreen/>} />
        <Route path="/login"  element={<LoginScreen/>} />
        <Route path="/orders"  element={< OrdersScreen/>} />
        
        </Routes>
     </BrowserRouter>

    
    </div>
  );
}

export default App;
