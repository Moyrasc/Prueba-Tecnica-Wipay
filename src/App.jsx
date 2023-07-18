import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/login'
import Navbar from './components/Navbar/Navbar'
import TotalUsers from './views/TotalUsers'
import TableUsers from './views/TableUsers'

function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/inicio' element={<TotalUsers />} />
        <Route path='/usuarios' element={<TableUsers />} />
      </Routes>

    </>
  )
}

export default App
