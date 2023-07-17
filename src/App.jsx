import { Route, Routes } from 'react-router'
import Home from './views/Home'
import Login from './views/login'
import Navbar from './components/Navbar/Navbar'

function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </>
  )
}

export default App
