import styled from 'styled-components'

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
