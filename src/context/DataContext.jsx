import { createContext, useContext, useState } from 'react'
import usersData from '../data/users.json'

const DataContext = createContext()

export const useData = () => {
  return useContext(DataContext)
}
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(usersData)

  const addUser = (user) => {
    setData((prevData) => ({
      ...prevData,
      usuarios: [...prevData.users, user]
    }))
  }

  return (
    <DataContext.Provider value={{ data, addUser }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext }
