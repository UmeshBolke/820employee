import { Route, Routes } from 'react-router-dom'
import './App.css'
import Welcome from './Components/Welcome'
import Login from './Components/Login'
import Register from './Components/Register'
import EmployeeDashboard from './Components/EmployeeDashboard'

function App() {


  return (
    <>
     <Routes>

      <Route path='/' element={<Welcome />}  ></Route>

      <Route path='/login' element={<Login />} ></Route>

      <Route path="/register" element={<Register />} > </Route>

      <Route path="/welcome" element={<Welcome />} ></Route>

      <Route path="/allemp" element={<EmployeeDashboard />} ></Route>
     </Routes>
    </>
  )
}

export default App
