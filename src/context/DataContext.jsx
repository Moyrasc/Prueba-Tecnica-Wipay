import { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './AuthContext'

const DataContext = createContext()

export const useData = () => {
  return useContext(DataContext)
}
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([])
  const { isLoggedIn } = useAuth()

  // Traer todos los usuarios
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isLoggedIn) {
          const res = await fetch(import.meta.env.VITE_BACKEND_URL + '/users', {
            headers: {
              Authorization: 'Bearer ' + isLoggedIn
            }
          })
          if (!res.ok) {
            throw new Error('Error fetch usuarios')
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
        console.error('Error fetch usuarios:', error)
      }
    }
    fetchData()
  }, [])

  // Aquí almacenaré los datos del usuario seleccionado
  const findUserById = (id) => data?.find(user => user.id === Number(id))

  const getCurrentDate = () => {
    const date = new Date()
    return date.toLocaleDateString()
  }
  // Añadir usuario
  const addUser = async (user) => {
    try {
      const res = await fetch(import.meta.env.VITE_BACKEND_URL + '/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + isLoggedIn
        },
        body: JSON.stringify(user)
      })
      if (!res.ok) {
        throw new Error('Error al añadir al usuario')
      }
      setData((prevData) => [...prevData, user])
    } catch (error) {
      console.error('Error fetch usuario:', error)
    }
  }
  // Editar usuario
  const editUser = async (id, updatedUser) => {
    console.log(updatedUser)
    try {
      const res = await fetch(import.meta.env.VITE_BACKEND_URL + `/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + isLoggedIn
        },
        body: JSON.stringify(updatedUser)
      })
      if (!res.ok) {
        throw new Error('Error al editar usuario')
      }
      setData((prevData) =>
        prevData.map((user) =>
          user.id === Number(id) ? { ...user, ...updatedUser, modificate_user: getCurrentDate() } : user
        )
      )
    } catch (error) {
      console.error('Error al editar usuario:', error)
    }
  }
  // Eliminar Usuario
  const deleteUser = async (userId) => {
    // try {
    //   const res = await fetch(import.meta.env.VITE_BACKEND_URL + `/users/${id}`)
    // } catch (error) {

    // }
    setData((prevData) => prevData.filter(user => user.id !== Number(userId)))
  }
  return (
    <DataContext.Provider value={{ data, addUser, findUserById, deleteUser, editUser }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext }
