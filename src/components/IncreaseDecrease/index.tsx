import { useContext, useState } from 'react'
import * as cartService from '../../services/cart-service'
import { ContextCartCount } from '../../utils/context-cart'
import { OrderDTO } from '../../models/order';
import { SignTag } from './styles';

export function IncreaseDecrease() {

    const { setContextCartCount } = useContext(ContextCartCount);

    const [count, setCount] = useState(0);

    const [cart, setCart] = useState<OrderDTO>(cartService.getCart())

    function handleDecrease() {
        const decr = count - 1
        if (decr !== -1) {
            setCount(decr)
            setCart(cartService.getCart())
            setContextCartCount(cart.items.length)
        }
        cartService.decreaseItem(decr);
        console.log('aqui decrescimo oh', decr)
    }

    function handleIncrease() {
        const sum = count + 1
        cartService.increaseItem(sum);
        setCart(cartService.getCart());
        setCount(sum)
        console.log('aqui a soma increase oh', sum)
    }

    return (
        <div>
            <SignTag>
                <span
                    onClick={() => handleDecrease()}>-</span>
                {count}
                <span
                    onClick={() => handleIncrease()}
                >+</span>
            </SignTag>
        </div>
    )
}



