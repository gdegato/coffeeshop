import coffeeList from '../../../../db.json'
import { Card } from '../../../components/Card'
import coffeeCup from '../../../assets/images/coffee-cup.png'
import { ShoppingCart, Timer, Coffee, Package } from 'phosphor-react'
import { HomeContainer, ProductsList, Subtitle } from './styles'
/* import { useState, useContext } from 'react'
import * as cartService from '../../../services/cart-service'
import { ContextCartCount } from '../../../utils/context-cart'
import { useNavigate } from 'react-router-dom'
import { OrderDTO } from '../../../models/order' */

export function Home() {
/*
  const navigate = useNavigate()

  const [cart, setCart] = useState<OrderDTO>(cartService.getCart())

  const { setContextCartCount } = useContext(ContextCartCount);

  function handleClearClick() {
      cartService.clearCart();
      updateCart();
  }

  function handleIncreaseItem(productId: number) {
      cartService.increaseItem(productId);
      setCart(cartService.getCart());
  }
  function handleDecreaseItem(productId: number) {
      cartService.decreaseItem(productId);
      updateCart()
  }

  function updateCart() {
      const newCart = cartService.getCart()
      setCart(newCart);
      setContextCartCount(newCart.items.length)
  }

   function handlePlaceOrderClick() {
      orderService.placeOrderRequest(cart)
          .then(response => {
              cartService.clearCart();
              setContextCartCount(0);
              navigate(`/confirmation/${response.data.id}`)
          })
  } */

  return (
    <>
      <HomeContainer>
        <header className='header-background'>
          <div>
            <h1>
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            <div>
              <ul>
                <li><span className='cart'><ShoppingCart weight="fill" /></span>Compra simples e segura</li>
                <li><span className='package'><Package weight="fill" /></span>Embalagem mantém o café intacto</li>
                <li><span className='timer'><Timer weight="fill" /></span>Entrega rápida e rastreada</li>
                <li><span className='coffee'><Coffee weight="fill" /></span>O café chega fresquinho até você</li>
              </ul>
            </div>
          </div>
          <div>
            <img src={coffeeCup} />
          </div>
        </header>

      </HomeContainer>
      <Subtitle>
        <h3>Nossos cafés</h3>
      </Subtitle>

      <ProductsList>
        {
          coffeeList.map((item) =>
            <Card
              key={item.id}
              product={{ ...item, quantity: 0 }}
            />
          )
        }
      </ProductsList>
    </>
  )
}
