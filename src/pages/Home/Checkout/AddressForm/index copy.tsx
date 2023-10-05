/* eslint-disable @typescript-eslint/no-explicit-any */
import { MagnifyingGlass, MapPin } from 'phosphor-react'
import { ContainerOrder, CheckoutContainer } from './styles'
import { useState } from 'react';
import * as forms from '../../../../utils/forms'
import * as apiCepService from '../../../../services/api-cep-service'
import FormInput from '../../../../components/FormInput';

/* type FormData = {
    cep: string;
    logradouro: string;
    localidade: string;
    bairro: string;
    cidade: string;
    uf: string;
} */

export function AddressForm2() {

    const [formData, setFormData] = useState<any>({
        cep: {
            value: "",
            id: "cep",
            name: "cep",
            type: "text",
            placeholder: "CEP",
            validation: function (value: string) {
                return /^.{8}$/.test(value);
            },
            message: "Informe um número com 8 dígitos"
        },
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


    function handleTurnDirty(name: string) {
        setFormData(forms.dirtyAndValidate(formData, name));
    }
    /* 
        function handleInputChange(event: any) {
            setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value))
        }
     */


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
                    <div>
                        <FormInput
                            {...formData.cep}
                            className="dsc-form-control col-1"
                            onTurnDirty={handleTurnDirty}
                            onChange={handleInputChange}
                        />
                        <div className='dsc-form-error'>
                            {formData.cep.message}
                        </div>
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


