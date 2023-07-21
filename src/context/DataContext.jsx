import { createContext, useContext, useState } from 'react'
import usersData from '../data/users.json'

const DataContext = createContext()

export const useData = () => {
  return useContext(DataContext)
}
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(usersData)

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
