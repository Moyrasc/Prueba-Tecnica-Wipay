import styled from 'styled-components'

const LoginContainer = styled.div`
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
    background-color: #db1b43;
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
  LoginContainer,
  InputContainer,
  Input,
  ButtonContainer,
  Button
}
