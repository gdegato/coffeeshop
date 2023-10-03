import { Bank, CreditCard, CurrencyDollarSimple, Money } from 'phosphor-react'
import { PaymentButton, ContainerPayment } from './styles'
import { useState } from 'react'

export function Payment() {

    const [buttonChecked, setButtonChecked] = useState('credit card')

    function handleChange(payment: string) {
        setButtonChecked(payment)
    }
    return (
        <ContainerPayment>
            <div className='payment-title'>
                <p><span><CurrencyDollarSimple size={22} color='#8047F8' /></span>Pagamento</p>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
            <div className='payment-buttons'>

                <PaymentButton
                    htmlFor="credit card"
                    color='#8047F8'
                    checked={buttonChecked === 'credit card'}
                >
                    <CreditCard size={22} />
                    <p>Cartão de crédito</p>
                    <input
                        type="radio"
                        id="credit card"
                        value="credit card"

                        name="payment"
                        onChange={() => handleChange('credit card')}
                    />
                </PaymentButton>

                <PaymentButton
                    htmlFor="debit card"
                    color='#8047F8'
                    checked={buttonChecked === 'debit card'}
                >
                    <Bank size={22} />
                    <p>Cartão de débito</p>
                    <input
                        type="radio"
                        id="debit card"
                        value="debit card"

                        onChange={() => handleChange('debit card')}
                        name="payment"
                    />
                </PaymentButton>

                <PaymentButton
                    htmlFor="money"
                    color='#8047F8'
                    checked={buttonChecked === 'money'}>
                    <Money size={22} />
                    <p>Dinheiro</p>
                    <input
                        type="radio"
                        id="money"
                        value="money"

                        onChange={() => handleChange('money')}
                        name="payment"
                    />
                </PaymentButton>
            </div>
        </ContainerPayment>

    )
}


