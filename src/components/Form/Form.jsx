import { Button, ButtonContainer, Container, FormContainer, Input, InputContainer } from './FormStyle'

const Form = () => {
  return (
    <>

      <FormContainer>
        <Container>
          <form>
            <InputContainer>
              <label htmlFor='email'>E-mail</label>
              <Input type='email' id='email' name='email' placeholder='E-mail' />
              <label htmlFor='password'>Contraseña</label>
              <Input type='password' id='password' name='password' placeholder='Contraseña' />
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
