import { Btn, BtnModal, ContainerModal } from './ModalStyled'

function Modal () {
  return (
    <>
      <ContainerModal>
        <h2>¿Desea eliminar al usuario?</h2>

        <BtnModal>
          <div>
            <Btn>Eliminar</Btn>
          </div>
          <div>
            <Btn style={{ backgroundColor: '#797D7F' }}>Cancelar</Btn>
          </div>

        </BtnModal>
      </ContainerModal>
    </>
  )
}
export default Modal
