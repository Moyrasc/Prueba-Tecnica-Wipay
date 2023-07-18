import { useState } from 'react'
import { InputContainer, LoginContainer, ButtonContainer, Input, Button } from './LoginStyled'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const handleUser = (e) => {
    setUser(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleLogin = (e) => {
    e.preventDefault()
    if (user === 'admin' && password === 'admin') {
      setIsLoggedIn(true)
      setErrorMessage('')
    } else {
      setIsLoggedIn(false)
      setErrorMessage('Nombre de usuario o contraseña incorrecto')
    };
  }
  if (isLoggedIn) {
    return (
      navigate('/TotalUsers')
    )
  }
  return (
    <>
      <LoginContainer>
        <form onSubmit={e => handleLogin(e)}>
          <p>{errorMessage}</p>
          <InputContainer>
            <label htmlFor='user'>Usuario</label>
            <Input type='text' id='user' name='user' placeholder='admin' value={user} onChange={handleUser} />
            <label htmlFor='password'>Contraseña</label>
            <Input type='password' id='password' name='password' placeholder='admin' value={password} onChange={handlePassword} />
          </InputContainer>
          <ButtonContainer>
            <Button type='submit'>Iniciar Sesión</Button>

          </ButtonContainer>

        </form>
      </LoginContainer>
    </>
  )
}

export default Login
