import { useState } from 'react'
import { Button, ButtonContainer, Container, FormContainer, Input, InputContainer } from './FormStyle'
import { useData } from '../../context/DataContext'
import validator from 'validator'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const { addUser } = useData()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email && !password) {
      setErrorMessage('Todos los campos son obligatorios')
      return
    }
    if (!validator.isEmail(email)) {
      setErrorMessage('Introduzca un email válido')
      return
    }
    if (!validator.isLength(password, { min: 6, max: 12 })) {
      setErrorMessage('La contraseña debe tener entre 6 y 12 caracteres')
      return
    }
    const newUser = {
      email,
      password
    }

    addUser(newUser)

    setEmail('')
    setPassword('')
    setErrorMessage('')
    navigate('/usuarios')
  }
  return (
    <>

      <FormContainer>
        <Container>
          <form onSubmit={handleSubmit} noValidate>
            <p>{errorMessage}</p>
            <InputContainer>
              <label htmlFor='email'>E-mail</label>
              <Input type='email' id='email' name='email' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
              <label htmlFor='password'>Contraseña</label>
              <Input type='password' id='password' name='password' placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} />
            </InputContainer>
            <ButtonContainer>
              <Button type='submit'>Crear Usuario</Button>
            </ButtonContainer>
          </form>
        </Container>
      </FormContainer>

    </>
  )
}

export default Form
