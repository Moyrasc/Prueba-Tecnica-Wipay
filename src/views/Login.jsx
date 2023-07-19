import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { FormContainer, InputContainer, ButtonContainer, Input, Button, Container } from '../components/Form/FormStyle'

const Login = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const { setIsLoggedIn } = useAuth()
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
      navigate('/inicio')
    } else {
      setErrorMessage('Nombre de usuario o contraseña incorrecto')
    }
  }

  return (
    <>
      <FormContainer>
        <Container>
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
        </Container>
      </FormContainer>
    </>
  )
}

export default Login
