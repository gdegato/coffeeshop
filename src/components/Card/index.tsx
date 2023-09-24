import { CoffeeCards } from './styles'
import { CoffeeDTO } from "../../models/product"
import { ShoppingCartSimple } from 'phosphor-react';

type Props = {
  product: CoffeeDTO;
}

export function Card({ product }: Props) {
  return (
    <CoffeeCards>
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
          <span>-</span>1<span>+</span>
        </p>
        <span className='cart'>
          <ShoppingCartSimple
            size={24}
            color="#fff"
            weight="fill" />
        </span>
      </div>
    </CoffeeCards>
  )
}
