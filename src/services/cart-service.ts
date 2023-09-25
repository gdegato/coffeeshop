import { OrderDTO, OrderItemDTO } from "../models/order";
import * as cartRepository from '../localstorage/cart-repository'
import { CoffeeDTO } from "../models/product";

export function saveCart(cart: OrderDTO) {
    cartRepository.save(cart)
}

export function getCart(): OrderDTO {
    return cartRepository.get();
}

export function addProduct(product: CoffeeDTO) {
    const cart = cartRepository.get();
    const item = cart.items.find(x => x.productId === product.id);
    if (!item) {
        const newItem = new OrderItemDTO(
            product.id,            
            product.quantity,
            product.price,
            product.content,
            product.category,
            product.title,
            product.imgUrl
        )
        cart.items.push(newItem);
        cartRepository.save(cart);
    }
}

export function clearCart() {
    cartRepository.clear();
}

export function increaseItem(productId: number) {
    console.log("chamou increase no service")
    const cart = cartRepository.get();
    const item = cart.items.find(x => x.productId === productId);
    console.log('aqui no increase', item, productId, cart)
    if (item) {
        item.quantity++;
        cartRepository.save(cart);
    }
}

export function decreaseItem(productId: number) {
    console.log("chamou decrease no service")
    const cart = cartRepository.get();
    const item = cart.items.find(x => x.productId === productId);
    if (item) {
        item.quantity--;
        if (item.quantity < 1) {
            cart.items = cart.items.filter(x => x.productId !== productId);
        }
        cartRepository.save(cart)
    }
}