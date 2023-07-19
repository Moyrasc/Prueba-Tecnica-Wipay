import { StyledTable } from '../../components/Table/TableStyled'
import Data from '../../data/users.json'
import { BsPencil } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'

const Table = () => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>ID</th>
          <th>E-mail</th>
          <th>Password</th>
          <th>Fecha de registro</th>
          <th>Acciones</th>
        </tr>
      </thead>
      {Data.map((user, i) => {
        return (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.create_user}</td>
            <td><BsPencil /><span style={{ marginLeft: '18px' }}><AiOutlineDelete /></span></td>
          </tr>
        )
      })}

      <tbody />
    </StyledTable>
  )
}

export default Table
