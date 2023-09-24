import { CurrencyDollarSimple, MapPin, Timer } from "phosphor-react";
import { Container } from "./styles";
import deliveryguy from '../../../assets/images/deliveryguy.svg'


export function Success() {
  return (
    <Container>
      <div>
        <div className="success-container-title">
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <div className="gradient">       
        <div className="success-container">
          <div className="success-map">
            <div>
              <span
                className='map-icon'>
                <MapPin
                  size={16}
                  color="#fff"
                  weight="fill" /></span>
            </div>
            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong></p>
              <p> Farrapos - Porto Alegre, RS</p>
            </div>
          </div>
          <div className="success-timer">
            <div>
              <span
                className='timer-icon'>
                <Timer
                  size={16}
                  weight="fill"
                  color="#fff" /></span>
            </div>
            <div>
              <p><strong>Previsão de entrega
              </strong></p>
              <p>20 min - 30 min </p>
            </div>
          </div>
          <div className="success-payment">
            <div>
              <span
                className='money-icon'>
                <CurrencyDollarSimple
                  size={16}
                  color="#fff" /></span>
            </div>
            <div>
              <p>
                <strong>Pagamento na entrega
                </strong></p>
              <p>Cartão de Crédito</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="success-image">
        <img src={deliveryguy} />
      </div>

    </Container>
  )
}
