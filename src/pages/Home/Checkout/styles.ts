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
`

export const Title = styled.h3`
  color: ${(props) => props.theme['base-title']};
  font-family: 'Baloo 2', cursive;
  margin-bottom: 15px;
`

export const ContainerOrder = styled.div`
  width: 662px;
  height: auto;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
  display: flex;
  padding: 40px;

  form {
    button {
      border-style: none;
      height: 42px;
    }
  }
  button:hover {
    background: ${(props) => props.theme['purple-light']};
    border-radius: 4px;
  }

  div {
    color: ${(props) => props.theme['base-text']};

    p:nth-child(1) {
      font-weight: bold;
      display: flex;
      align-content: center;
      span {
        margin-right: 8px;
      }
    }
    p:nth-child(2n) {
      margin-left: 30px;
      margin-bottom: 28px;
    }
  }

  input {
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-input']};
    border-radius: 4px;
    margin: 6px;
  }

  [class^='col-'] {
    box-sizing: border-box;
    height: 42px;
    padding: 12px;
  }

  .col-1 {
    width: 190px;
  }
  .col-2 {
    width: 562px;
  }
  .col-3 {
    width: 200px;
  }
  .col-4 {
    width: 350px;
  }
  .col-5 {
    width: 200px;
  }
  .col-6 {
    width: 276px;
  }
  .col-7 {
    width: 60px;
  }
`
export const ContainerPayment = styled.section`
  margin-top: 40px;
  width: 662px;
  height: auto;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
  padding: 40px;
  color: ${(props) => props.theme['base-text']};

  .payment-title {
    display: flex;
    flex-direction: column;
    font-size: 16px;

    p:nth-child(1) {
      font-weight: bold;
      display: flex;
      align-content: center;
      span {
        margin-right: 8px;
      }
    }
    p:nth-child(2n) {
      margin-left: 30px;
      margin-bottom: 28px;
    }
  }

  .payment-buttons {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`