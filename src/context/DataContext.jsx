import { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './AuthContext'
// import usersData from '../data/users.json'

const DataContext = createContext()

export const useData = () => {
  return useContext(DataContext)
}
export const DataProvider = ({ children }) => {
  // const [data, setData] = useState(usersData)
  const [data, setData] = useState([])
  const { isLoggedIn } = useAuth()

  // Traer todos los usuarios
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isLoggedIn) {
          const res = await fetch('http://localhost:3000/users', {
            headers: {
              Authorization: 'Bearer ' + isLoggedIn
            }

          })

          if (!res.ok) {
            throw new Error('Failed to fetch users')
          }

          const data = await res.json()
          const formatData = data?.map(item => {
            return {
              ...item,
              create_user: new Date(item.create_user).toLocaleDateString(),
              modificate_user: new Date(item.modificate_user).toLocaleDateString()
            }
          })
          setData(formatData)
        }
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchData()
  }, [])
  // Aquí almacenaré los datos del usuario seleccionado
  const findUserById = (id) => data?.find(user => user.id === Number(id))
  //
  const getCurrentDate = () => {
    const date = new Date()
    return date.toLocaleDateString()
  }
  // Añadir usuario
  const addUser = (user) => {
    const newUser = {
      ...user,
      create_user: getCurrentDate(),
      id: data.length + 1
    }
    setData((prevData) => [...prevData, newUser])
  }
  // Editar usuario
  const editUser = (userId, updatedUser) => {
    setData((prevData) =>
      prevData.map((user) =>
        user.id === Number(userId) ? { ...user, ...updatedUser, modificate_user: getCurrentDate() } : user))
  }
  // Eliminar Usuario
  const deleteUser = (userId) => {
    console.log(userId)
    setData((prevData) => prevData.filter(user => user.id !== Number(userId)))
  }
  return (
    <DataContext.Provider value={{ data, addUser, findUserById, deleteUser, editUser }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext }
