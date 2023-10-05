/* eslint-disable @typescript-eslint/no-explicit-any */
import { MagnifyingGlass, MapPin } from 'phosphor-react'
import { ContainerOrder, CheckoutContainer } from './styles'
import { useState } from 'react';
import * as apiCepService from '../../../../services/api-cep-service'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

type FormData = {
    cep: string;
    logradouro: string;
    numero: string;
    complemento?: string;
    localidade: string;
    bairro: string;
    cidade: string;
    uf: string;
}

const schema = yup.object().shape({
    cep: yup.string().required('O CEP é obrigatório'),
    logradouro: yup.string().required('A rua é obrigatória'),
    numero: yup.string().required('O número é obrigatório'),
    bairro: yup.string().required('O bairro é obrigatório'),
    localidade: yup.string().required('A cidade é obrigatória'),
    uf: yup.string().required('O estado é obrigatório'),
});

export function AddressForm() {

    const [formData, setFormData] = useState<FormData>({
        cep: '',
        logradouro: '',
        numero: '',
        localidade: '',
        bairro: '',
        cidade: '',
        uf: '',
    });

    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });


    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    const handleFieldChange = (fieldName: string, value: string) => {
        setFormData({
          ...formData,
          [fieldName]: value,
        });
    };

    function handleClick() {
        if (formData.cep === '')
            return;

        apiCepService.findCEP(formData.cep)
            .then(response => {
                setFormData(response.data)
                console.log('eu sou o form', formData)
            }).catch((erro) => {
                console.log("erro: ", erro)
            }
        )
    }

    return (

        <CheckoutContainer>
            <ContainerOrder>
                <form onSubmit={handleSubmit(() => handleFormSubmit)}>
                    <div>
                        <p><span><MapPin size={22} color="#c47f17" /></span>Endereço de entrega</p>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>
                    <div className='container-form'>
                        <div>
                            <Controller
                                name="cep"
                                control={control}                            
                                render={({ field }) =>
                                    <input
                                        className='col-1'
                                        placeholder='CEP'{...field}
                                        value={formData.cep}
                                        onChange={(e) => handleFieldChange('cep', e.target.value)}
                                    />}
                            />
                            {errors.cep && <p className='form-error'>{errors.cep.message}</p>}
                            <button
                                onClick={handleClick}
                                className='search'
                                type='button'><MagnifyingGlass size={24} color="#8047F8" />
                            </button>
                        </div>
                        <div>
                            <Controller
                                name="logradouro"
                                control={control}
                                render={({ field }) =>
                                    <input
                                        className='col-2'
                                        placeholder='Endereço'{...field}
                                        value={formData.logradouro}
                                        onChange={(e) => handleFieldChange('logradouro', e.target.value)}/>}
                            />
                            {errors.logradouro && <p className='form-error'>{errors.logradouro.message}</p>}
                        </div>
                        <div>
                            <Controller
                                name="numero"
                                control={control}
                                render={({ field }) =>
                                    <input
                                        className='col-3'
                                        placeholder='Número'{...field} />
                                    }
                            />
                            {errors.numero && <p className='form-error'>{errors.numero.message}</p>}
                        </div>
                        <div >
                            <Controller
                                name="complemento"
                                control={control}
                                render={({ field }) =>
                                    <input
                                        className='col-4'
                                        placeholder='Complemento - opcional'{...field} />}
                            />
                        </div>
                        <div >
                            <Controller
                                name="bairro"
                                control={control}
                                render={({ field }) =>
                                    <input
                                        className='col-5'
                                        placeholder='Bairro'{...field}
                                        value={formData.bairro}
                                        onChange={(e) => handleFieldChange('bairro', e.target.value)}/>}
                                    
                            />
                            {errors.bairro && <p className='form-error'> {errors.bairro.message}</p>}
                        </div>
                        <div >
                            <Controller
                                name="localidade"
                                control={control}
                                render={({ field }) =>
                                    <input
                                        className='col-6'
                                        placeholder='Cidade'{...field}
                                        value={formData.localidade}
                                        onChange={(e) => handleFieldChange('localidade', e.target.value)}/>}
                            />
                            {errors.localidade && <p className='form-error'>{errors.localidade.message}</p>}
                        </div>
                        <div >
                            <Controller
                                name="uf"
                                control={control}
                                render={({ field }) =>
                                    <input
                                        className='col-7'
                                        placeholder='UF'{...field} 
                                        value={formData.uf}
                                        onChange={(e) => handleFieldChange('uf', e.target.value)}/>}
                            />
                            {errors.uf && <p className='form-error'>{errors.uf.message}</p>}
                        </div>
                    </div>
                </form>
            </ContainerOrder>
        </CheckoutContainer>
    )
}


