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

  const fetchLogin = ({ email, password }) => {
    // ? TODO: logica del fetch
  }
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, fetchLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext }
