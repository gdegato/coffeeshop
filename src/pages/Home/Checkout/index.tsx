import { Title, CheckoutContainer, ContainerPrincipal } from './styles'
import { useContext } from 'react';
import * as cartService from '../../../services/cart-service'
import { Sidebar } from './Sidebar';
import { ContextCartCount } from '../../../utils/context-cart';
import { useNavigate } from 'react-router-dom';
import { AddressForm } from './AddressForm';
import { Payment } from './Payment';
import { FormProvider, useForm } from 'react-hook-form';


export function Checkout() {

  const navigate = useNavigate();
  const methods = useForm();

  const { setContextCartCount } = useContext(ContextCartCount)

  function handlePlaceOrderClick() {
    cartService.saveCart
    setContextCartCount(0);
    console.log('mandou no chekout para o success')
    navigate('/success')
  }

  return (
    <FormProvider {...methods}>

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
    </FormProvider>
  )
}


