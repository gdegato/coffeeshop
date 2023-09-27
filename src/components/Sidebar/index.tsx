import { SidebarContainer, ButtonCheckout } from "./styles";
import * as cartService from '../../services/cart-service'
import { ContextCartCount } from '../../utils/context-cart'
import { MapPin } from "phosphor-react";
import { useState, useContext } from 'react'
import { OrderDTO } from "../../models/order";

export function Sidebar() {

    const { setContextCartCount } = useContext(ContextCartCount);

    const [cart, setCart] = useState<OrderDTO>(cartService.getCart());

    const [count, setCount] = useState(0);

    function handleDecrease() {
        const decr = count - 1
        if (decr !== -1) {
            setCount(decr)
            setCart(cartService.getCart())
            setContextCartCount(cart.items.length)
        }
        cartService.decreaseItem(decr);
    }

    function handleIncrease() {
        const sum = count + 1
        cartService.increaseItem(sum);
        setCart(cartService.getCart());
        setCount(sum)
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
                                            <span>
                                                {item.quantity}
                                            </span>
                                            <span
                                                onClick={() => handleIncrease()}>+</span>
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