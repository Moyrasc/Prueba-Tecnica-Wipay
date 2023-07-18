import styled from 'styled-components'

const UsersContainer = styled.div`

align-items: stretch;
flex-direction: column;
display: flex;

justify-content: flex-start;

& h1 {
  font-size: 4rem;
  margin: 4rem 0rem;
  text-align: center;
  
}`

const UsersTotal = styled.div`
border: solid 2px #010306;
width: 400px;
height: 400px;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.14);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.14);
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.14);
cursor:pointer;
& p {
  color:#db1b43;
  font-size: 7rem;
  font-weight: bolder;
}
`
const Container = styled.div`
display:flex;
align-items: center;
justify-content: space-evenly;
margin-top:3rem;
`
const ImgContainer = styled.div`
& img {
  height: 400px;
  width: 400px;
  
}
`

export {
  UsersContainer,
  UsersTotal,
  ImgContainer,
  Container
}
