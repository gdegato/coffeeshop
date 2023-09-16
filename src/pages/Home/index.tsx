import coffeeList from '../../../db.json'
import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import coffeeCup from '../../assets/images/coffee-cup.png'

import { ShoppingCart, Timer, Coffee, Package } from 'phosphor-react'

export function Home() {
  return (
    <>
      <Header />
      <section>
        <div>
          <h1>
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <div>
            <p><ShoppingCart />Compra simples e segura</p>
            <p><Package />Embalagem mantém o café intacto</p>
            <p><Timer />Entrega rápida e rastreada</p>
            <p><Coffee />O café chega fresquinho até você</p>
          </div>
        </div>
        <div>
          <img src={coffeeCup} />
        </div>
      </section>
      <h3>Nossos cafés</h3>
      {
        coffeeList.map((item) =>
          <Card
            key={item.id}
            product={item} />
        )
      }
    </>
  )
}
