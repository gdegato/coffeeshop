import styled from 'styled-components'

export const ContainerPrincipal = styled.div`
  display: flex;
  justify-content: space-between;

  .aside-title {
    padding-left: 32px;
  }  
`

export const CheckoutContainer = styled.main`
  background: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  border-radius: 6px;   
`

export const Title = styled.h3`
  color: ${(props) => props.theme['base-title']};
  font-family: 'Baloo 2', cursive;
  margin-bottom: 15px;
`

export const ButtonCheckout = styled.button`
  background: ${(props) => props.theme['yellow']};
  color: ${(props) => props.theme['white']};
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 14px;
  padding: 8px;
  height: 46px;

  :hover {
      background: ${(props) => props.theme['yellow-dark']};
      transition: 1s;      
    }  
`

//Payment

interface PaymentButtonProps {
  checked: boolean
}

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

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 13rem;
  background-color: ${(props) => props.theme['base-card']};
  margin-top: 1rem;
  padding: 2.5rem;
  border-radius: 8px;
  font-size: 1.32rem;
`

export const PaymentButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const PaymentButton = styled.label<PaymentButtonProps>`
  width: 11.18rem;
  height: 3.2rem;
  border: none;
  border-radius: 8px;
  background-color: ${(props) =>
    props.checked ? props.theme['purple-light'] : props.theme['base-button']};
  box-shadow: ${(props) =>
    props.checked ? '0 0 0 2px' + props.theme.purple : 'none'};
  color: ${(props) => props.theme.purple};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 0.5rem;
  padding-left: 0.7rem;
  transition: background-color 0.5s ease-in-out;

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 0.75rem;
    text-transform: uppercase;
  }

  :hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  :focus {
    background-color: ${(props) => props.theme['purple-light']};
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
  }
  
  input {
    opacity: 0;
  }
`

// Sidebar

export const SidebarContainer = styled.aside`
  background: ${(props) => props.theme['base-card']};
  width: 448px;
  padding: 40px;
  margin-left: 32px;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;

  .checkout-list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    color: ${(props) => props.theme['base-text']};
  }

  img {
    width: 64px;
    height: 64px;
    margin-right: 20px;
  }
  .tags-title {
    margin-bottom: 8px;
  }
  .tags-container {
    display: flex;
  }
  .tags {
    display: flex;
    align-items: center;
  }
  .sign-tag {
    background: ${(props) => props.theme['base-button']};
    height: 32px;
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
      gap: 4px;
    }
  }

  .remove-tag {
    width: 91px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border-color: transparent;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    text-transform: uppercase;
    font-size: 12px;
    gap: 4px;

    :hover {
      background: ${(props) => props.theme['purple-light']};      
    }
  }

  .price-tag {
    font-size: 16px;
    font-weight: 700;
  }

  .checkout-container {
    border-bottom: 1px solid ${(props) => props.theme['base-button']};
    margin-top: 20px;
  }

  .checkout-total-container {
    margin: 24px 0;
  }

  .checkout-subtotal,
  .checkout-total-delivery,
  .checkout-total-order {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme['base-text']};
    padding: 6px 0;

    p:nth-child(1) {
      font-size: 14px;
    }
    p:nth-child(2n) {
      font-weight: bold;
      font-size: 16px;
    }
  }
  .checkout-total-order {
    font-size: 20px;
  }
`

//Address Form

export const FormContainer = styled.div`
  width: 662px;
  height: auto;
  border-radius: 6px; 
  display: flex;
  padding: 40px;
  background: ${(props) => props.theme['base-card']};

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

