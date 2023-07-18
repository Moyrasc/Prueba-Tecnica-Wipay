import styled from 'styled-components'

const Container = styled.div`
align-items: center;
display: flex;
height: 80vh;
justify-content: center;
width: 100%;
`
const ContainerTitle = styled.div`
display:flex;
justify-content: space-around;
flex-direction:column;
align-items: center;
`
const Title = styled.h1`
font-size: 3rem;
font-weight:bold;
& span {
    color: red;
}
`
const ContainerParagraph = styled.p`
padding:1rem 0rem;
margin: 20px;
display: flex;
flex-direction: column;
& p {
    font-size: 18px;
    text-align:center;
}
`

export {
  Container,
  ContainerTitle,
  Title,
  ContainerParagraph

}
