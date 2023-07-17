import { InputContainer, LoginContainer, ButtonContainer, Input, Button } from './LoginStyled'
const Login = () => {
  return (
    <>

      <LoginContainer>
        <form action=''>
          <InputContainer>
            <label htmlFor='user'>Usuario</label>
            <Input type='text' id='user' name='user' />
            <label htmlFor='password'>Contraseña</label>
            <Input type='password' id='password' name='password' />
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
