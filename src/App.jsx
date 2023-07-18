import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/login'
import Navbar from './components/Navbar/Navbar'
import TotalUsers from './views/TotalUsers'

function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/TotalUsers' element={<TotalUsers />} />
      </Routes>

    </>
  )
}

export default App
