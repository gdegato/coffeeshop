import styled from 'styled-components'

export const HomeContainer = styled.section`
  display: flex;
  flex: 1;
`

export const Header = styled.header`
  background-image: url('src/assets/images/background.svg');
  background-size: cover;
  display: flex;
  flex: 1;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  grid-gap: 40px;
  padding: 100px 90px;

  h1 {
    font-size: 3rem;
    width: 36.75rem;
    height: 7.75rem;
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2', cursive;
    line-height: 62.4px;
  }

  p {
    margin-top: 1rem;
    width: 36.75rem;
    margin-bottom: 4.125rem;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  ul {
    display: grid;
    grid-template-columns: 256px 1fr;
    margin-top: 4.125rem;

    li {
      list-style: none;
      font-size: 1rem;
      color: ${(props) => props.theme['base-text']};
      display: flex;
      align-items: center;
      gap: 12px;
      padding-bottom: 1.25rem;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        color: ${(props) => props.theme['white']};
      }
    }

    .cart {
      background: ${(props) => props.theme['yellow-dark']};
    }
    .package {
      background: ${(props) => props.theme['yellow']};
    }
    .timer {
      background: ${(props) => props.theme['base-subtitle']};
    }
    .coffee {
      background: ${(props) => props.theme['purple']};
    }
  }
`

export const Subtitle = styled.h3`
  font-size: 2rem;
  color: ${(props) => props.theme['base-title']};
  font-family: 'Baloo 2', cursive;
  margin-top: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 40px;
`

export const ProductsList = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  justify-content: space-between;
  margin: 0px auto;
  align-content: center;
  grid-template-columns: repeat(auto-fill, minmax(280px, 4fr));
  padding: 0px 0px 150px 40px;
`
