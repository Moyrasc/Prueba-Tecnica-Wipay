import { createContext, useContext, useState } from 'react'
import usersData from '../data/users.json'

const DataContext = createContext()

export const useData = () => {
  return useContext(DataContext)
}
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(usersData)
  // Implementar manera de añadir fecha de hoy al user
  // {email,password,create_user}
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

  return (
    <DataContext.Provider value={{ data, addUser }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext }
