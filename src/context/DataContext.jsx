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
    <DataContext.Provider value={{ data, addUser, findUserById }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext }
