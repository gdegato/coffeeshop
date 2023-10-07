/* eslint-disable @typescript-eslint/no-unused-vars */
import { Title, ContainerPrincipal, ButtonCheckout, SidebarContainer, ContainerPayment, PaymentButton, FormContainer } from './styles'
import { MapPin, Bank, CreditCard, CurrencyDollarSimple, Money, MagnifyingGlass } from 'phosphor-react'
import { useContext } from 'react';
import * as cartService from '../../../services/cart-service'
import { ContextCartCount } from '../../../utils/context-cart';
import * as apiCepService from '../../../services/api-cep-service'
import { OrderDTO } from '../../../models/order';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { AddressAndPaymentDTO, FinalOrderDTO } from '../../../models/finalOrder';
import * as orderService from '../../../services/order-service'
import { ContextFinalOrder } from '../../../utils/context-order';

type Props = {
  addressAndPayment: AddressAndPaymentDTO;
}

//Campos do formulário

const schemaValidationForm = zod.object({
  cep: zod.string().nonempty('O CEP é obrigatório'),
  logradouro: zod.string().nonempty('A rua é obrigatória'),
  numero: zod.string().nonempty('O número é obrigatório'),
  bairro: zod.string().nonempty('O bairro é obrigatório'),
  localidade: zod.string().nonempty('A cidade é obrigatória'),
  uf: zod.string().nonempty('O estado é obrigatório'),
});

type FormData = zod.infer<typeof schemaValidationForm>

export function Checkout() {

  const navigate = useNavigate();

  const { setContextCartCount } = useContext(ContextCartCount)

  const { setContextFinalOrder } = useContext(ContextFinalOrder)

  const [cart, setCart] = useState<OrderDTO>(cartService.getCart());
  const [buttonChecked, setButtonChecked] = useState('credit card')

  const [finalOrder, setFinalOrder] = useState({
    logradouro: '',
    numero: '',
    localidade: '',
    bairro: '',
    uf: '',
    paymentMethod: ''

  })

  //Funcoes para mandar dados para success

  function handleTeste() {
    orderService.getFinalOrder()
    const teste = finalOrder
    console.log(teste, 'teste do estado');
  }

  //Funções do formulário

  const newForm = useForm<FormData>({
    resolver: zodResolver(schemaValidationForm),
    defaultValues: {
      cep: '',
      logradouro: '',
      numero: '',
      localidade: '',
      bairro: '',
      uf: '',
    },
  });

  const {
    handleSubmit,
    register,
    reset,
    getValues,
    watch, formState: { errors }
  } = newForm

  function handleCheckoutSubmit() {
    
    setFinalOrder(watch)
    setContextFinalOrder(finalOrder)
    navigate('/success')
    console.log('finalorder', finalOrder)
    console.log('passou setFinalOrder(watch)', setFinalOrder(watch))
  }

  function handleFormSubmit(data: FormData) {
    console.log(data)
    const userCep = watch('cep');
    if (!userCep) {
      console.error('O campo CEP está vazio.');
      return;
    }

    apiCepService.findCEP(userCep)
      .then((response) => {
        const { logradouro, localidade, bairro, uf } = response.data;

        const updatedFormData = {
          ...getValues(),
          logradouro,
          localidade,
          bairro,
          uf,
        };
        reset(updatedFormData);
      })
      .catch((error) => {
        console.error('Erro ao buscar o CEP:', error);
      });
  }

  //Funções do Payment  

  function handleChange(payment: string) {
    setButtonChecked(payment)
  }

  //Funções do Sidebar

  function handleDecrease(productId: number) {
    cartService.decreaseItem(productId);
    updateCart()
  }

  function handleIncrease(productId: number) {
    cartService.increaseItem(productId);
    setCart(cartService.getCart());
  }

  function handleRemoveCartItem(productId: number) {
    if (productId) {
      cartService.removeCartItem(productId)
    }
    updateCart()
  }

  function updateCart() {
    const newCart = cartService.getCart()
    setCart(newCart);
    setContextCartCount(newCart.items.length)
  }

  const delivery: number = 3.50
  const deliverySum = () => {
    const sum = cart.total + delivery
    return sum
  }

  return (
    <ContainerPrincipal>
      <div>
        <Title>Complete seu pedido</Title>
        <FormContainer>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className='header-address'>
              <p><span><MapPin size={22} color="#c47f17" /></span>Endereço de entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
            <div className='container-form'>
              <div>
                <div className='input-cep'>
                  <input
                    className='col-1'
                    list='cep-user'
                    placeholder='CEP'
                    {...register('cep')}
                  />
                  <button
                    className='search'
                    type='submit'
                    onClick={handleFormSubmit}
                  ><MagnifyingGlass size={24} color="#8047F8" />
                  </button>
                </div>
                {errors.cep && <p className='form-error'>{errors.cep.message}</p>}
              </div>
              <div>
                <input
                  className='col-2'
                  placeholder='Endereço'
                  {...register('logradouro')}
                />
                {errors.logradouro && <p className='form-error'>{errors.logradouro.message}</p>}
              </div>
              <div>
                <input
                  className='col-2'
                  placeholder='Número'
                  {...register('numero')}
                />
                {errors.numero && <p className='form-error'>{errors.numero.message}</p>}
              </div>
              <div >
                <input
                  className='col-2'
                  placeholder='Complemento'
                />
              </div>
              <div >
                <input
                  className='col-2'
                  placeholder='Bairro'
                  {...register('bairro')}
                />
                {errors.bairro && <p className='form-error'> {errors.bairro.message}</p>}
              </div>
              <div >
                <input
                  className='col-6'
                  placeholder='Cidade'
                  {...register('localidade')}
                />
                {errors.localidade && <p className='form-error'>{errors.localidade.message}</p>}
              </div>
              <div >
                <input
                  className='col-7'
                  placeholder='UF'
                  {...register('uf')}
                />
                {errors.uf && <p className='form-error'>{errors.uf.message}</p>}
              </div>
            </div>

          </form>
        </FormContainer>
        <ContainerPayment>
          <div className='payment-title'>
            <p><span><CurrencyDollarSimple size={22} color='#8047F8' /></span>Pagamento</p>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </div>
          <div className='payment-buttons'>
            <PaymentButton
              htmlFor="credit card"
              color='#8047F8'
              checked={buttonChecked === 'credit card'}
            >
              <CreditCard size={22} />
              <p>Cartão de crédito</p>
              <input
                type="radio"
                id="credit card"
                value="credit card"
                name="payment"
                onChange={() => handleChange('credit card')}
              />
            </PaymentButton>
            <PaymentButton
              htmlFor="debit card"
              color='#8047F8'
              checked={buttonChecked === 'debit card'}
            >
              <Bank size={22} />
              <p>Cartão de débito</p>
              <input
                type="radio"
                id="debit card"
                value="debit card"
                onChange={() => handleChange('debit card')}
                name="payment"
              />
            </PaymentButton>
            <PaymentButton
              htmlFor="money"
              color='#8047F8'
              checked={buttonChecked === 'money'}>
              <Money size={22} />
              <p>Dinheiro</p>
              <input
                type="radio"
                id="money"
                value="money"
                onChange={() => handleChange('money')}
                name="payment"
              />
            </PaymentButton>
          </div>
        </ContainerPayment>
      </div>
      <div>
        <div className='aside-title'>
          <Title>Cafés selecionados</Title>
        </div>

        <SidebarContainer>
          <div className="checkout-container">
            {cart.items.length !== 0 && (
              cart.items.map(item => (
                <div key={item.productId} className="checkout-list">
                  <div className="tags-container">
                    <div>
                      <img src={item.imgUrl} />
                    </div>
                    <div>
                      <div className="tags-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="tags">
                        <p className='sign-tag'>
                          <span
                            onClick={() => handleDecrease(item.productId)}>-</span>
                          <span>
                            {item.quantity}
                          </span>
                          <span
                            onClick={() => handleIncrease(item.productId)}>+</span>
                        </p>
                        <p className='remove-tag'>
                          <span>
                            <MapPin size={16} color='#4B2995' />
                          </span>
                          <span onClick={() => handleRemoveCartItem(item.productId)} >remover</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className='price-tag'>
                      R$   {item.subTotal.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="checkout-total-container">
            <div className="checkout-subtotal">
              <p>Total de itens</p>
              <p>R${cart.total.toFixed(2)}</p>
            </div>
            <div className="checkout-total-delivery">
              <p>Entrega</p>
              <p>R${delivery.toFixed(2)}</p>
            </div>
            <div className="checkout-total-order">
              <h3>Total</h3>
              <h3>R$ {deliverySum().toFixed(2)} </h3>
            </div>
          </div>
          <ButtonCheckout
            onClick={handleCheckoutSubmit}
            /*  disabled={isSubmitDisable} */
            type='submit'>
            confirmar pedido
          </ButtonCheckout>
        </SidebarContainer >
      </div>
    </ContainerPrincipal>
  )
}


