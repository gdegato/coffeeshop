import { CoffeeCards } from './styles'
import { CoffeeDTO } from "../../models/product"
import { ShoppingCartSimple } from 'phosphor-react';
import { useState, useContext } from 'react'
import * as cartService from '../../services/cart-service'
import { ContextCartCount } from '../../utils/context-cart'

import { OrderDTO } from '../../models/order'



type Props = {
  product: CoffeeDTO;
}

export function Card({ product }: Props) {
 

  const [cart, setCart] = useState<OrderDTO>(cartService.getCart())

  const { setContextCartCount } = useContext(ContextCartCount);

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

  return (
    <>
      {cart.items &&
        < CoffeeCards >
          <img src={product.imgUrl} alt={product.title} />
          <div className='tag'>
            {product.category.map(
              (item) =>
                <h6>{item}
                </h6>
            )}
          </div>
          <h2>{product.title}</h2>
          <p className='content'>{product.content} </p>
          <div className='price'>
            <p className='price-tag'>R$
              <h3>
                {product.price.toFixed(2)}
              </h3>
            </p>
            <p className='sign-tag'>
              <span
                onClick={() => handleDecreaseItem(product.id)}>-</span>
              {product.quantity}
              <span
                onClick={() => handleIncreaseItem(product.id)}
              >+</span>
            </p>
            <span className='cart'>
              <ShoppingCartSimple
                size={24}
                color="#fff"
                weight="fill" />
            </span>
          </div>
        </CoffeeCards >
      }
    </>
  )
}
