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
    // if (user === 'admin@admin.com' && password === 'admin') {
    //   setIsLoggedIn(true)
    //   navigate('/inicio')
    // } else {
    //   setErrorMessage('Nombre de usuario o contraseña incorrecto')
    // }
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: user,
        password
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Nombre de usuario o contraseña incorrecto')
        }
      })
      .then((data) => {
        /* global localStorage */
        /* eslint no-undef: "error" */
        localStorage.setItem('accessToken', data.token)
        setIsLoggedIn(true)
        setErrorMessage('')
        navigate('/inicio')
      })
      .catch((error) => {
        setErrorMessage(error.message)
      })
  }

  return (
    <>
      <FormContainer>
        <Container>
          <form onSubmit={e => handleLogin(e)}>
            <p>{errorMessage}</p>
            <InputContainer>
              <label htmlFor='user'>Usuario</label>
              <Input type='text' id='user' name='user' placeholder='admin@admin.com' value={user} onChange={handleUser} />
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
