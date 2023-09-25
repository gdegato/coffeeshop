import { Bank, CreditCard, CurrencyDollarSimple, MagnifyingGlass, MapPin, Money } from 'phosphor-react'
import { ContainerOrder, ContainerPayment, Title, CheckoutContainer, ContainerPrincipal } from './styles'
import { useState, useContext } from 'react';
import * as profileService from '../../../services/profile-service'
import * as cartService from '../../../services/cart-service'
import { Button } from '../../../components/Button';
import { Sidebar } from '../../../components/Sidebar';
import { ContextCartCount } from '../../../utils/context-cart';
import { OrderDTO, OrderItemDTO } from '../../../models/order';
import { CoffeeDTO } from '../../../models/product';


/* function getListProducts() {
  setContextCartCount(cartService.getCart().total)
  console.log()
} */

type FormData = {
  cep: string;
  logradouro: string;
  localidade: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export function Checkout() {

  const [coffeeList, setCoffeeList] = useState<CoffeeDTO[]>([])

  const { contextCartCount, setContextCartCount } = useContext(ContextCartCount)


  const [formData, setFormData] = useState<FormData>({
    cep: '',
    logradouro: '',
    localidade: '',
    bairro: '',
    cidade: '',
    uf: '',
  })

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const name = event.target.name
    setFormData({ ...formData, [name]: value })
  }

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    profileService.findCEP(formData.cep)
      .then(response => {
        setFormData(response.data)
      }).catch((erro) => {
        console.log("erro: ", erro)
      }
      )
  }

  return (
    <ContainerPrincipal>
      <div>
        <Title>Complete seu pedido</Title>
        <CheckoutContainer>
          <div>
            <ContainerOrder>
              <form onSubmit={handleFormSubmit}>
                <div>
                  <p><span><MapPin size={22} color="#c47f17" /></span>Endereço de entrega</p>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
                <input
                  placeholder="CEP"
                  type="text"
                  name='cep'
                  className='col-1'
                  value={formData.cep}
                  onChange={handleInputChange} />
                <button
                  className='search'
                  type='submit'><MagnifyingGlass size={24} color="#8047F8" /></button>
                <input
                  placeholder="Rua"
                  type="text"
                  className='col-2'
                  value={formData.logradouro}
                  onChange={handleInputChange} />
                <input
                  placeholder="Número"
                  type="text"
                  className='col-3'
                  onChange={handleInputChange} />
                <input
                  placeholder="Complemento - opcional"
                  type="text"
                  className='col-4'
                  onChange={handleInputChange} />
                <input
                  placeholder="Bairro"
                  type="text"
                  className='col-5'
                  value={formData.bairro}
                  onChange={handleInputChange} />
                <input
                  placeholder="Cidade"
                  type="text"
                  className='col-6'
                  value={formData.localidade}
                  onChange={handleInputChange} />
                <input
                  placeholder="UF"
                  type="text"
                  className='col-7'
                  value={formData.uf}
                  onChange={handleInputChange} />
              </form>
            </ContainerOrder>
            <ContainerPayment>
              <div className='payment-title'>
                <p><span><CurrencyDollarSimple size={22} color='#8047F8' /></span>Pagamento</p>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
              <div className='payment-buttons'>
                <Button text='cartão de crédito'>
                  <CreditCard size={16} color='#8047F8' />
                </Button>
                <Button text='cartão de débito'>
                  <Bank size={16} color='#8047F8' />
                </Button>
                <Button text='dinheiro'>
                  <Money size={16} color='#8047F8' />
                </Button>
              </div>
            </ContainerPayment>
          </div>
        </CheckoutContainer>
      </div>
      <div>
        <div className='aside-title'>
          <Title>Cafés selecionados</Title>
        </div>      
            <Sidebar/>       
      </div>
    </ContainerPrincipal>
  )
}

