import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  .success-image {
    margin-top: 132px;
    align-items: baseline;
  }

  p {
    color: ${(props) => props.theme['base-text']};
  }

  .success-container-title {
    h2 {
      font-size: 32px;
      font-weight: 800;
      color: ${(props) => props.theme['yellow-dark']};
      font-family: 'Baloo 2', cursive;
    }
    p {
      margin-bottom: 40px;
    }
  }

  .gradient {
    width: 526px;
  }

  .success-container {
    border: 1px solid ${(props) => props.theme['purple-light']};
    border-radius: 6px 36px;
    padding: 40px;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    color: ${(props) => props.theme['white']};
  }

  .success-map,
  .success-timer,
  .success-payment {
    display: flex;
    padding: 16px 0;
    font-size: 16px;
    line-height: 130%;
  }

  .map-icon {
    background: ${(props) => props.theme['purple']};
    margin-right: 12px;
  }

  .timer-icon {
    background: ${(props) => props.theme['yellow']};
    margin-right: 12px;
  }

  .money-icon {
    background: ${(props) => props.theme['yellow-dark']};
    margin-right: 12px;
  }
`
