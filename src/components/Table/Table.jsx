import { StyledTable } from '../../components/Table/TableStyled'
import { BsPencil } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useData } from '../../context/DataContext'

const Table = () => {
  const { data } = useData()
  const navigate = useNavigate()

  const handleClick = (user) => {
    navigate('/edit/' + user.id)
  }
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>ID</th>
          <th>Correo electrónico</th>
          <th>Password</th>
          <th>Fecha de registro</th>
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
              <td><BsPencil style={{ width: '20' + 'px', height: '20' + 'px', cursor: 'pointer', color: 'green' }} onClick={() => handleClick(user)} /><span style={{ marginLeft: '18px' }}><AiOutlineDelete style={{ width: '20' + 'px', height: '20' + 'px', cursor: 'pointer', color: 'red' }} /></span></td>
            </tr>
          )
        })}
      </tbody>
    </StyledTable>
  )
}

export default Table
