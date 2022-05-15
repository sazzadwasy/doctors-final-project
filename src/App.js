
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About/About';
import Appointment from './Pages/Home/Appointment/Appointment';
import ContactUs from './Pages/Home/Contact/ContactUs';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login';
import Reviews from './Pages/Home/Reviews/Reviews';
import Signup from './Pages/Home/Signup/Signup';
import Navbar from './Pages/Shared/Navbar.js/Navbar';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
