import styled from 'styled-components'

export const SignTag = styled.div`

    background: ${(props) => props.theme['base-button']};
    height: 38px;
    width: 72px;
    text-align: center;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-right: 8px;

    span {
      color: ${(props) => props.theme['purple']};        
    }
  

`