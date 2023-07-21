import styled from 'styled-components'

const StyledTable = styled.table`
    margin-top:2rem;
    border-collapse: collapse;
    width: 96%;
    background-color: #ffffff;
    border-radius: 20px;

    td {
        border-bottom: 1px solid #EBEBEB;
        color: #393939;
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        text-align: left;
        padding: 10px 15px;
        width: 50px;
        & button{
            border: none;

        }
        
    }
    th {
        text-align: left;
        border-bottom: 1px solid #cccccc;
        padding: 20px 20px; 
        font-weight:bold;
        font-family: 'Poppins', sans-serif;
        }
        
`

export {
  StyledTable

}
