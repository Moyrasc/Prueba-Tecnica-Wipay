import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { FormContainer, InputContainer, ButtonContainer, Input, Button, Container } from '../components/Form/FormStyle'
import { useData } from '../context/DataContext'
import Modal from '../components/Modal/Modal.jsx'
import { useState } from 'react'

const EditProfile = () => {
  const { id } = useParams()
  const { findUserById, deleteUser, editUser } = useData()
  const selectedUser = findUserById(id)
  const [isModalOpen, setModalOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

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
  const handleEditUser = () => {
    setIsEditing(true)
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if (isSubmitting) {
      const email = e.target.email.value
      const password = e.target.password.value
      editUser(id, { email, password })
      navigate('/usuarios')
    }
  }

  return (
    <>

      <FormContainer>
        <Container>
          <form onSubmit={(e) => handleSubmit(e)}>
            <InputContainer>
              <label htmlFor='email'>E-mail</label>
              <Input type='email' id='email' name='email' placeholder='email@email.com' defaultValue={selectedUser.email || ''} disabled={!isEditing} />
              <label htmlFor='password'>Contraseña</label>
              <Input type='password' id='password' name='password' placeholder='Contraseña' defaultValue={selectedUser.password || ''} disabled={!isEditing} />
              <label htmlFor='create-user'>Fecha de Creación</label>
              <Input type='' id='create-user' name='create-user' disabled defaultValue={selectedUser.create_user} />
              <label htmlFor='modificate-user'>Fecha de Modificación</label>
              <Input type='' id='modificate-user' name='modificate-user' disabled defaultValue={selectedUser.modificate_user ? selectedUser.modificate_user : selectedUser.create_user} />
            </InputContainer>
            <ButtonContainer>
              {isEditing
                ? (
                  <Button type='submit' style={{ backgroundColor: '#229954' }} onClick={() => setIsSubmitting(true)}>Guardar Cambios</Button>
                  )
                : (
                  <Button type='button' onClick={() => handleEditUser()}>
                    Editar Usuario
                  </Button>
                  )}
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
