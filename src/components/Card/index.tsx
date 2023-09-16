import { CoffeeDTO } from "../../models/products"

type Props = {
  product: CoffeeDTO
}

export function Card({ product }: Props) {
    return (
      <div>
        <img src={product.img} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.category} </p>
            <p>{product.content} </p>
            <p>{product.price.toFixed(2)} </p>
      </div>
    )
  }
  