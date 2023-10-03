import { Title, CheckoutContainer, ContainerPrincipal } from './styles'
import { useContext } from 'react';
import * as cartService from '../../../services/cart-service'
import { Sidebar } from './Sidebar';
import { ContextCartCount } from '../../../utils/context-cart';
import { useNavigate } from 'react-router-dom';
import { AddressForm } from './AddressForm';
import { Payment } from './Payment';



export function Checkout() {

  const navigate = useNavigate();

  const { setContextCartCount } = useContext(ContextCartCount)

  function handlePlaceOrderClick() {
    cartService.saveCart
    setContextCartCount(0);
    navigate('/success')
  }

  return (
    <ContainerPrincipal>
      <div>
        <Title>Complete seu pedido</Title>
        <CheckoutContainer>
          <AddressForm />
          <Payment />
        </CheckoutContainer>
      </div>
      <div>
        <div className='aside-title'>
          <Title>Cafés selecionados</Title>
        </div>
        <Sidebar onNewClick={handlePlaceOrderClick} />
      </div>
    </ContainerPrincipal>
  )
}


