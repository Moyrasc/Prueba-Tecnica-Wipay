import styled from 'styled-components'

const Container = styled.div`
align-items: center;
display: flex;
height: 80vh;
width: 100%;
flex-direction: column;
justify-content: space-between;
`
const ContainerTitle = styled.div`
display:flex;
justify-content: space-around;
flex-direction:column;
align-items: center;
padding: 2.5rem 0rem;
`
const Title = styled.h1`
font-size: 3rem;
font-weight:bold;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
& span {
    color: red;
}
`

const ContentValues = styled.div`
`
const ContentImg = styled.div`
display: flex;
width: 900px;
height:600px;
    border: 1px solid #0c2846;
    border-radius: 10px;
    padding: 1rem;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.18);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.18);
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.18);
`
const ContentSection = styled.section`
`
const Section = styled.section`
display: grid;
justify-items: center;
text-align: center;
width: 95%;
& p {
  margin: 1rem 1rem;
}
& h2 {
  color: #0c2846;
  font-size: 26px
}
& img {
  height: 80px;
  width:80px;
}

`
export {
  Container,
  ContainerTitle,
  Title,

  ContentValues,
  ContentImg,
  ContentSection,
  Section

}
