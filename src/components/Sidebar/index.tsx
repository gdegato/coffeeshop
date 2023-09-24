import { SidebarContainer, ButtonCheckout } from "./styles";
import latte from '../../assets/images/latte.png'
import { MapPin } from "phosphor-react";

export function Sidebar() {
    return (
        <SidebarContainer>
            <div className="checkout-container">
                <div className="checkout-list">
                    <div className="tags-container">
                        <div>
                            <img src={latte} />
                        </div>
                        <div>
                            <div className="tags-title">
                                <p>Expresso Tradicional</p>
                            </div>
                            <div className="tags">
                                <p className='sign-tag'>
                                    <span>-</span>1<span>+</span>
                                </p>
                                <p className='remove-tag'>
                                    <span>
                                        <MapPin size={16} color='#4B2995' />
                                    </span><span>remover</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='price-tag'>
                            R$9.50
                        </p>
                    </div>
                </div>
            </div>
            <div className="checkout-container">
                <div className="checkout-list">
                    <div className="tags-container">
                        <div>
                            <img src={latte} />
                        </div>
                        <div>
                            <div className="tags-title">
                                <p>Expresso Tradicional</p>
                            </div>
                            <div className="tags">
                                <p className='sign-tag'>
                                    <span>-</span>1<span>+</span>
                                </p>
                                <p className='remove-tag'>
                                    <span>
                                        <MapPin size={16} color='#4B2995' />
                                    </span><span>remover</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='price-tag'>
                            R$9.50
                        </p>
                    </div>
                </div>
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
                    <h3>R$33,50</h3>
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