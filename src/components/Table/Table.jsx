import { StyledTable } from '../../components/Table/TableStyled'
import { BsPencil } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import { useNavigate, useParams } from 'react-router-dom'
import { useData } from '../../context/DataContext'
import Modal from '../Modal/Modal'
import { useState } from 'react'

const Table = () => {
  const { id } = useParams()
  const { data, deleteUser } = useData()
  const navigate = useNavigate()
  const [isModalOpen, setModalOpen] = useState(false)

  const handleClick = (user) => {
    navigate('/edit/' + user.id)
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
      <StyledTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Correo electrónico</th>
            <th>Contraseña</th>
            <th>Fecha registro</th>
            <th>Fecha modificación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, i) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.create_user}</td>
                <td>{user.modificate_user ? user.modificate_user : user.create_user}</td>
                <td><BsPencil style={{ width: '20' + 'px', height: '20' + 'px', cursor: 'pointer', color: 'green' }} onClick={() => handleClick(user)} /><span style={{ marginLeft: '18px' }}><AiOutlineDelete onClick={handleOpenModal} style={{ width: '20' + 'px', height: '20' + 'px', cursor: 'pointer', color: 'red' }} /></span></td>
              </tr>
            )
          })}
        </tbody>
      </StyledTable>
      {isModalOpen && (
        <Modal closeModal={handleCloseModal} handleDeleteUser={handleDeleteUser} />
      )}
    </>
  )
}

export default Table
