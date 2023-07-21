import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import Navbar from './components/Navbar/Navbar'
import TotalUsers from './views/TotalUsers'
import TableUsers from './views/TableUsers'
import EditProfile from './views/EditProfile'
import NewUser from './views/NewUser'
import ProtectedRoute from './components/ProtectedRoute'

function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/inicio' element={<TotalUsers />} />
          <Route path='/usuarios' element={<TableUsers />} />
          <Route path='/edit/:id' element={<EditProfile />} />
          <Route path='/newuser' element={<NewUser />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
