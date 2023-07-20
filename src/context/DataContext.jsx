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
    const currentDay = String(date.getDate()).padStart(2, '0')
    const currentMonth = String(date.getMonth() + 1).padStart(2, '0')
    const currentYear = date.getFullYear()

    const currentDate = `${currentDay}-${currentMonth}-${currentYear}`
    console.log('Current date:', currentDate)
  }

  const addUser = (user) => {
    const newUser = {
      ...user,
      create_user: getCurrentDate()
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
