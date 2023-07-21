import { Navigate, useParams } from 'react-router-dom'
import { FormContainer, InputContainer, ButtonContainer, Input, Button, Container } from '../components/Form/FormStyle'
import { useData } from '../context/DataContext'
import Modal from '../components/Modal/Modal.jsx'
import { useState } from 'react'

const EditProfile = () => {
  const { id } = useParams()
  const { findUserById, deleteUser } = useData()
  const selectedUser = findUserById(id)
  const [isModalOpen, setModalOpen] = useState(false)

  if (!selectedUser) {
    return <Navigate to='/usuarios' />
  }
  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }
  const handleDeleteUser = () => {
    deleteUser(id)
    setModalOpen(false)
  }
  return (
    <>

      <FormContainer>
        <Container>
          <form>
            <InputContainer>
              <label htmlFor='email'>E-mail</label>
              <Input type='email' id='email' name='email' placeholder='email@email.com' defaultValue={selectedUser.email || ''} />
              <label htmlFor='password'>Contraseña</label>
              <Input type='password' id='password' name='password' placeholder='Contraseña' defaultValue={selectedUser.password || ''} />
              <label htmlFor='create-user'>Fecha de Creación</label>
              <Input type='' id='create-user' name='create-user' disabled defaultValue={selectedUser.create_user} />
              <label htmlFor='modificate-user'>Fecha de Modificación</label>
              <Input type='' id='modificate-user' name='modificate-user' disabled defaultValue={selectedUser.create_user} />
            </InputContainer>
            <ButtonContainer>
              <Button type='submit'>Editar Usuario</Button>
            </ButtonContainer>
            <ButtonContainer>
              <Button type='button' style={{ backgroundColor: '#db1b43' }} onClick={handleOpenModal}>Borrar Usuario</Button>
            </ButtonContainer>

          </form>
        </Container>
      </FormContainer>
      {isModalOpen && (
        <Modal closeModal={handleCloseModal} handleDeleteUser={handleDeleteUser} />
      )}

    </>
  )
}

export default EditProfile
