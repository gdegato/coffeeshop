import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { HeaderContainer } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'
export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} />
      <nav>
        <p>
          <MapPin size={24} color='#8047F8' weight="fill" />
          Porto Alegre, RS
        </p>
        <span>
          <NavLink to="/" title='Cart'>
            <ShoppingCart size={24} color='#C47F17' weight="fill"/>
          </NavLink>
        </span>
      </nav>
    </HeaderContainer>

  )
}
