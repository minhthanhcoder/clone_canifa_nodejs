
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Hompage from './pages/HomePage/Index'
import Login from './pages/Login/Login'
import LoginAuth from './pages/Login/LoginAuth'
import Register from './pages/register/Register'
import ProductView from './pages/User/ProductView'

function App() {
 
  return (
    <>
    <Routes>
      <Route path='/' element = {<Hompage/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/login-auth' element = {<LoginAuth/>}/>
      <Route path='/register' element = {<Register/>}/>
      <Route path='/product-view' element = {<ProductView/>}/>
    </Routes>
    </>
  )
}

export default App
