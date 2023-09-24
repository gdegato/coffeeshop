import styled from 'styled-components'

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
