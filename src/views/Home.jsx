import React from 'react'
import { Container, ContainerParagraph, ContainerTitle, Title } from './HomeStyled'

const Home = () => {
  return (
    <Container>
      <ContainerTitle>
        <Title>Bienvenido a <span>Wipay</span></Title>
        <ContainerParagraph>
          <p>Empresa innovadora tanto en soluciones tecnológicas como en procesos productivos de trabajo. El entendimiento de procesos complejos y la adaptación al usuario hacen que Wipay crezca día a día</p>

        </ContainerParagraph>

      </ContainerTitle>

    </Container>
  )
}

export default Home
