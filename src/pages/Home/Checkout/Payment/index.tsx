import { Bank, CreditCard, CurrencyDollarSimple, Money } from 'phosphor-react'
import { ContainerPayment } from './styles'
import { Button } from '../../../../components/Button'

export function Payment() {
    
    return (
        <ContainerPayment>
            <div className='payment-title'>
                <p><span><CurrencyDollarSimple size={22} color='#8047F8' /></span>Pagamento</p>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
            <div className='payment-buttons'>
                <Button text='cartão de crédito'>
                    <CreditCard size={16} color='#8047F8' />
                </Button>
                <Button text='cartão de débito'>
                    <Bank size={16} color='#8047F8' />
                </Button>
                <Button text='dinheiro'>
                    <Money size={16} color='#8047F8' />
                </Button>
            </div>
        </ContainerPayment>

    )
}


