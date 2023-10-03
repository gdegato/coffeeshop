import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
 
`
export const ContainerPrincipal = styled.div`
  display: flex;
  justify-content: space-between;

  .aside-title {
    padding-left: 32px;
  }
`
export const CheckoutContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  color: ${(props) => props.theme['base-title']};
  font-family: 'Baloo 2', cursive;
  margin-bottom: 15px;
`

