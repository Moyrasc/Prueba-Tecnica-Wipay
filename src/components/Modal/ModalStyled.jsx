import styled from 'styled-components'

const ContainerModal = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 300px;
height: 150px;
margin: auto;
padding: 10px;
border-radius: 5px;
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.14);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.14);
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.14);
border: solid 1px #010306;
position: absolute;
    top: 50%;
    right: 40%;
    background-color: white;
& h2 {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}
`
const BtnModal = styled.div`
display: flex;
border: none;
justify-content: space-around;
padding:2rem;

`
const Btn = styled.button`
 background-color: #db1b43;
    color: white;
    font-weight: bold;
    margin-top: 1rem;
    border-radius: 5px;
    // border: 2px solid white;
    cursor:pointer;
    padding: .5rem .5rem;
`
export {
  ContainerModal,
  BtnModal,
  Btn
}
