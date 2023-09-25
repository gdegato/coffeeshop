import { SidebarContainer, ButtonCheckout } from "./styles";
import * as cartService from '../../services/cart-service'
import { ContextCartCount } from '../../utils/context-cart'
import { MapPin } from "phosphor-react";
import { useState, useContext } from 'react'
import { OrderDTO } from "../../models/order";


export function Sidebar() {

    const { setContextCartCount } = useContext(ContextCartCount);
    const [cart, setCart] = useState<OrderDTO>(cartService.getCart())

    const [count, setCount] = useState(0);

    function handleDecrease() {
        const decr = count - 1
        if (decr !== -1) {
            setCount(decr)
            setCart(cartService.getCart())
            setContextCartCount(cart.items.length)           
        }
        cartService.decreaseItem(decr);
        console.log('CHECKOUT decrescimo oh', decr)
    }

    function handleIncrease() {
        const sum = count + 1
        cartService.increaseItem(sum);
        setCart(cartService.getCart());
        setCount(sum)
        console.log('CHECKOUT a soma increase oh', sum)
    }


    function updateCart() {
        const newCart = cartService.getCart()
        setCart(newCart);
        setContextCartCount(newCart.items.length)      
        console.log('update ==>', newCart.items.length)
    }


    return (
        <SidebarContainer>
            <div className="checkout-container">
                {cart.items.length !== 0 && (
                    cart.items.map(item => (
                        <div className="checkout-list">
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
                                                onClick={() => handleDecrease()}>-</span>
                                            {item.quantity}
                                            <span
                                                onClick={() => handleIncrease()}>+</span>
                                        </p>
                                        <p className='remove-tag'>
                                            <span>
                                                <MapPin size={16} color='#4B2995' />
                                            </span>
                                            <span>remover</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='price-tag'>
                                    R${item.price.toFixed(2)}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="checkout-total-container">
                <div className="checkout-subtotal">
                    <p>Total de itens</p>
                    <p>R$50,00</p>
                </div>
                <div className="checkout-total-delivery">
                    <p>Entrega</p>
                    <p>R$3,50</p>
                </div>
                <div className="checkout-total-order">
                    <h3>Total</h3>
                    <h3>R$55.30</h3>
                </div>
            </div>
            <ButtonCheckout>
                confirmar pedido
            </ButtonCheckout>
        </SidebarContainer >
    )
}


/* import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;

}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  )
} */