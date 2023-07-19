import styled from 'styled-components'

const Container = styled.div`
    border: 2px solid #060303;
    border-radius:10px;
    width: 500px;
    height: 450px;
    display: flex;
    border-radius: 10px
    flex-direction: column;
    justify-content: center;
    align-items: center;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.14);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.14);
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.14);
`
const FormContainer = styled.div`
align-items: center;
display: flex;
height: 80vh;
justify-content: center;
width: 100%;
& p {
    text-transform: uppercase;
    color:red;
    font-weight:bold;
    padding-bottom: 1rem
}
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    & label {
            text-transform: uppercase;
            font-weight: bold;
            
    }

`
const Input = styled.input`
    
    margin: 10px 0;
    display: block;
    border-radius: 5px;
    border: 1px solid #060303;
    padding: 10px;
    width:450px
    
    `
const ButtonContainer = styled.div`
        display: flex;
        justify-content: center;

`
const Button = styled.button`
    background-color: #2e9935;
    color: white;
    font-weight: bold;
    margin-top: 1rem;
    border-radius: 5px;
    border: 2px solid white;
    cursor:pointer;
    padding: .5rem .5rem;
    width: 450px;
    font-size:1rem;
    `
export {
  Container,
  FormContainer,
  InputContainer,
  Input,
  ButtonContainer,
  Button
}
