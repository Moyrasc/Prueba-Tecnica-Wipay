import React, { useState } from 'react'
import { Container, ImgContainer, UsersContainer, UsersTotal } from './TotalUsersStyled'
import users from '../data/users.json'
import imgGirl from '../assets/img-total-users.png'
import { useNavigate } from 'react-router-dom'

const TotalUsers = () => {
  const [data] = useState(users)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/TableUsers')
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
