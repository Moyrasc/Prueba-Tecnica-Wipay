import { FormContainer, InputContainer, ButtonContainer, Input, Button, Container } from '../components/Form/FormStyle'
const EditProfile = () => {
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
              <label htmlFor='create-user'>Fecha de Creación</label>
              <Input type='' id='create-user' name='create-user' disabled />
              <label htmlFor='modificate-user'>Fecha de Modificación</label>
              <Input type='' id='modificate-user' name='modificate-user' disabled />
            </InputContainer>
            <ButtonContainer>
              <Button type='submit'>Editar Usuario</Button>
            </ButtonContainer>
          </form>
        </Container>
      </FormContainer>

    </>
  )
}

export default EditProfile
