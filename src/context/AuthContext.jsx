import { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  /* global localStorage */
  /* eslint no-undef: "error" */
  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('isLoggedIn')) || false
  )
  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn))
  }, [isLoggedIn])

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext }
