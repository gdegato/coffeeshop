import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
`

export const ContainerOrder = styled.div`
  width: 662px;
  height: auto;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
  display: flex;
  padding: 40px;

  .input-cep{
    display: flex;
    align-items: center;
  }

  .container-form{
    display: flex;
    flex-wrap: wrap;
  }

  form {
    button {
      border-style: none;
      height: 42px;
      width: 40px;
      margin-left: 4px;
    }
  }
  button:hover {
    background: ${(props) => props.theme['purple-light']};
    border-radius: 4px;
    box-shadow: none;
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

  /*   .dsc-form-control[data-dirty='true'][data-invalid='true'] ~ div {
    display: unset;
  } */

  .form-error {
    color: ${(props) => props.theme['alert']};
    font-size: 12px;     
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
