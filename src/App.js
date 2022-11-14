 import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap' ;
import {BrowserRouter, Routes,  Route, Link, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
// import Home from './components/Home';
import CartScreen from './screens/CartScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';


function App() {
  return (
    <div className="App">
      {/* <Home /> */}
     <Navbar />
     
     
     <BrowserRouter>
        <Routes>
        <Route path="/"  element={<HomeScreen />} />
        <Route path="/cart"  element={<CartScreen />} />
        <Route path="/register"  element={<RegisterScreen/>} />
        <Route path="/login"  element={<LoginScreen/>} />
        
        </Routes>
     </BrowserRouter>

    
    </div>
  );
}

export default App;
