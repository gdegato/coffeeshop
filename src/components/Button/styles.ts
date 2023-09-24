import styled from 'styled-components'

export const PaymentContainer = styled.button`
  width: 180px;
  margin: 6px;
  border-radius: 6px;
  border-color: transparent;
  background: ${(props) => props.theme['base-button']};
  padding: 16px;
  color: ${(props) => props.theme['base-text']};
  text-transform: uppercase;
  font-size: 12px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    span {
      padding-right: 12px;
    }
  }

  :hover {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme['purple']};    
  }
   
`
