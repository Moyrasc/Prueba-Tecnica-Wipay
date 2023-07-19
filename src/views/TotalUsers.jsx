import { Container, ImgContainer, UsersContainer, UsersTotal } from './TotalUsersStyled'
import imgGirl from '../assets/img-total-users.png'
import { useNavigate } from 'react-router-dom'
import { useData } from '../context/DataContext'

const TotalUsers = () => {
  const { data } = useData()

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/usuarios')
  }

  return (
    <>
      <UsersContainer>
        <h1>Usuarios Registrados</h1>
        <Container>
          <UsersTotal onClick={handleClick}>
            <p>{data.length}</p>
          </UsersTotal>
          <ImgContainer>
            <img src={imgGirl} alt='chica-sonriente' />
          </ImgContainer>
        </Container>
      </UsersContainer>

    </>
  )
}

export default TotalUsers
