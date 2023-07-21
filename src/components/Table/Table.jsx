import { StyledTable } from '../../components/Table/TableStyled'
import { BsPencil } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useData } from '../../context/DataContext'
import Modal from '../Modal/Modal'
import { useState } from 'react'
import CustomPagination from '../Pagination/CustomPagination'
import { Container } from '../Pagination/CustomPaginationStyled'

const Table = () => {
  const [id, setId] = useState()
  const { data, deleteUser } = useData()
  const navigate = useNavigate()
  const [isModalOpen, setModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  const handleClick = (user) => {
    navigate('/edit/' + user.id)
  }
  const handleOpenModal = (userId) => {
    setModalOpen(true)
    setId(userId)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }
  const handleDeleteUser = () => {
    deleteUser(id)

    setModalOpen(false)
  }
  // Lógica para cambiar de página
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }
  // Lógica para calcular el índice del primer y último elemento en la página actual
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

  return (
    <Container>
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
          {currentItems.map((user, i) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.create_user}</td>
                <td>{user.modificate_user ? user.modificate_user : user.create_user}</td>
                <td><BsPencil style={{ width: '20' + 'px', height: '20' + 'px', cursor: 'pointer', color: 'green' }} onClick={() => handleClick(user)} />
                  <span style={{ marginLeft: '18px' }}>
                    <AiOutlineDelete onClick={() => handleOpenModal(user.id)} style={{ width: '20' + 'px', height: '20' + 'px', cursor: 'pointer', color: 'red' }} />
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </StyledTable>
      {isModalOpen && (
        <Modal closeModal={handleCloseModal} handleDeleteUser={() => handleDeleteUser(id)} />
      )}
      <CustomPagination
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Container>
  )
}

export default Table
