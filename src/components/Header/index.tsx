import logo from '../../assets/images/logo.svg'
import { ShoppingCart,  MapPinLine } from 'phosphor-react'
export function Header() {
  return (
    <header>
       <div>
        <img src={logo} />
      </div>
      <div>
        <p><MapPinLine size={40} color="#a5c674" /> Porto Alegre, RS</p>
        <ShoppingCart />
      </div>
    </header>
   
  )
}
