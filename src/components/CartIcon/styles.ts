import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Cart = styled.div`
display: flex;
`
export const CartCounter = styled.div`
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme['white']};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  font-size: 10px;
  border-radius: 50%;
  position: relative;
  top: -20px;
  left: 4%;
`
