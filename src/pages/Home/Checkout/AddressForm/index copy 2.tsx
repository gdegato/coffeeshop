import { MagnifyingGlass, MapPin } from 'phosphor-react'
import { ContainerOrder, CheckoutContainer } from './styles'
import { useState } from 'react';
import * as apiCepService from '../../../../services/api-cep-service'

type FormData = {
    cep: string;
    logradouro: string;
    localidade: string;
    bairro: string;
    cidade: string;
    uf: string;
}

export function AddressForm() {

    const [formData, setFormData] = useState<FormData>({
        cep: '',
        logradouro: '',
        localidade: '',
        bairro: '',
        cidade: '',
        uf: '',
    })

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value
        const name = event.target.name
        setFormData({ ...formData, [name]: value })
    }


    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        apiCepService.findCEP(formData.cep)
            .then(response => {
                setFormData(response.data)
            }).catch((erro) => {
                console.log("erro: ", erro)
            }
            )
    }

    return (

        <CheckoutContainer>
            <ContainerOrder>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <p><span><MapPin size={22} color="#c47f17" /></span>Endereço de entrega</p>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>
                    <div className='input-cep'>
                        <input
                            placeholder="CEP"
                            type="text"
                            name='cep'
                            className='col-1'
                            value={formData.cep}
                            onChange={handleInputChange} />
                        <button
                            className='search'
                            type='submit'><MagnifyingGlass size={24} color="#8047F8" />
                        </button>
                    </div>

                    <input
                        placeholder="Rua"
                        type="text"
                        className='col-2'
                        value={formData.logradouro}
                        onChange={handleInputChange} />
                    <input
                        placeholder="Número"
                        type="text"
                        className='col-3'
                        onChange={handleInputChange} />
                    <input
                        placeholder="Complemento - opcional"
                        type="text"
                        className='col-4'
                        onChange={handleInputChange} />
                    <input
                        placeholder="Bairro"
                        type="text"
                        className='col-5'
                        value={formData.bairro}
                        onChange={handleInputChange} />
                    <input
                        placeholder="Cidade"
                        type="text"
                        className='col-6'
                        value={formData.localidade}
                        onChange={handleInputChange} />
                    <input
                        placeholder="UF"
                        type="text"
                        className='col-7'
                        value={formData.uf}
                        onChange={handleInputChange} />
                </form>
            </ContainerOrder>
        </CheckoutContainer>
    )
}


