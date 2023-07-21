import { Btn, BtnModal, ContainerModal } from './ModalStyled'

function Modal ({ closeModal, handleDeleteUser }) {
  return (
    <>
      <ContainerModal>
        <h2>¿Desea eliminar al usuario?</h2>

        <BtnModal>
          <div>
            <Btn onClick={() => handleDeleteUser()}>Eliminar</Btn>
          </div>
          <div>
            <Btn style={{ backgroundColor: '#797D7F' }} onClick={() => closeModal()}>Cancelar</Btn>
          </div>

        </BtnModal>
      </ContainerModal>
    </>
  )
}
export default Modal
