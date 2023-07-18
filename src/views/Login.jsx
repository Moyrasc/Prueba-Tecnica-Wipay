import { useState } from 'react'
import { InputContainer, LoginContainer, ButtonContainer, Input, Button } from './LoginStyled'
const Login = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleUser = (e) => {
    setUser(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleLogin = (e) => {
    e.preventDefault()
    if (user === 'admin' && password === 'password') {
      setIsLoggedIn(true)
      setErrorMessage('')
    } else {
      setIsLoggedIn(false)
      setErrorMessage('Nombre de usuario o contraseña incorrecto')
    };
  }
  if (isLoggedIn) {
    return (
      <p>Crear view para navegacion a pagina de usuarios</p>
    )
  }
  return (
    <>
      <LoginContainer>
        <form onSubmit={e => handleLogin(e)}>
          <InputContainer>
            <label htmlFor='user'>Usuario</label>
            <Input type='text' id='user' name='user' placeholder='Nombre de Usuario' value={user} onChange={handleUser} />
            <label htmlFor='password'>Contraseña</label>
            <Input type='password' id='password' name='password' placeholder='Contraseña' value={password} onChange={handlePassword} />
          </InputContainer>
          <ButtonContainer>
            <Button type='submit'>Iniciar Sesión</Button>
          </ButtonContainer>
          <p>{errorMessage}</p>
        </form>
      </LoginContainer>
    </>
  )
}

export default Login
