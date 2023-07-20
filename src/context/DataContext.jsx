import { createContext, useContext, useState } from 'react'
import usersData from '../data/users.json'

const DataContext = createContext()

export const useData = () => {
  return useContext(DataContext)
}
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(usersData)
  // Aquí almacenaré los datos del usuario seleccionado
  const [selectedUser, setSelectedUser] = useState(null)

  const getCurrentDate = () => {
    const date = new Date()
    return date.toLocaleDateString()
  }

  const addUser = (user) => {
    const newUser = {
      ...user,
      create_user: getCurrentDate(),
      id: data.length + 1
    }
    setData((prevData) => [...prevData, newUser])
  }
  // Edit user
  return (
    <DataContext.Provider value={{ data, addUser, selectedUser, setSelectedUser }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext }
