import React from 'react';
import {Entypo, MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons'

import nathely from '../../images/nathely.jpg';
import pizzacesar from '../../images/pizzacesar.jpg';
import vinhoecia from '../../images/vinhoecia.jpg';
import antonnella from '../../images/antonnella.jpg';
import coreto from '../../images/coreto.jpg';
import sushiloko from '../../images/sushiloko.png'


import {ContainerFilters,
        Title,
        Filters,
        OptionsFilter,
        TitleOptionsFilter,
        Option,
        TitleFilter,

        ContainerRestaurants,
        OptionRestaurant,
        Img,
        InfoRestaurantes,
        InfoLineOne,
        Name,
        InfoLineTwo,
        Noute,
        AddInfoOne,
        InfoLineThree,
        AddInfoTwo
    } from './styles.js'

const ButtonsFilter = [
    {
        key: String(Math.random()),
        name: 'Tipo de Loja'
    },

    {
        key: String(Math.random()),
        name: 'Entrega Grátis'
    },

    {
        key: String(Math.random()),
        name: 'Ordenar'
    },

    {
        key: String(Math.random()),
        name: 'Distância'
    },
    {
        key: String(Math.random()),
        name: 'Entrega iFood'
    },
    {
        key: String(Math.random()),
        name: 'Super Restaurante'
    },
]

const BlocksRestaurants  = [
    {
        key: String(Math.random()),
        img: nathely,
        name: 'Nathely Pizza Express',
        noute: '4.6 ',
        infoOne: '| Pizza | 4,5 Km',
        infoTwo: '55-65 min | R$ 5,00'
    },
    {
        key: String(Math.random()),
        img: pizzacesar,
        name: 'Pizza Cesar',
        noute: '4.5 ',
        infoOne: '| Pizza | 5,1 Km',
        infoTwo: '68-78 min | R$ 8,90'
    },
    {
        key: String(Math.random()),
        img: vinhoecia,
        name: 'Vinho&Cia',
        noute: '5.0 ',
        infoOne: '| Bebidas | 1,7 Km',
        infoTwo: '60-70 min | R$ 9,00'
    },
    {
        key: String(Math.random()),
        img: antonnella,
        name: 'Pizzaria Antonnella',
        noute: '5.0 ',
        infoOne: '| Pizza | 5 Km',
        infoTwo: '45-55 min | Grátis'
    },
    {
        key: String(Math.random()),
        img: coreto,
        name: 'Coreto',
        noute: '4.9 ',
        infoOne: '| Lanches | 2,3 Km',
        infoTwo: '40-50 min | R$ 4,00'
    },
    {
        key: String(Math.random()),
        img: sushiloko,
        name: 'Sushiloko',
        noute: '4.1 ',
        infoOne: '| Japonesa | 2,6 Km',
        infoTwo: '60-70 min | R$ 7,99'
    },
    
]

export default function Restaurants(){
    return(
        <>
            <ContainerFilters>

                <Title>Restaurantes</Title>

                <Filters>

                    <OptionsFilter>

                        <TitleOptionsFilter>Filtros</TitleOptionsFilter>
                        <MaterialCommunityIcons name="filter-variant" size={24} color="#6e6e6e" />

                    </OptionsFilter>

                    {ButtonsFilter.map((item) => (
                        <Option key={item.key}>

                            <TitleFilter>{item.name}</TitleFilter>
                            <Entypo name="chevron-down" size={18} color ="#6e6e6e" />
                        </Option>
                    ))}

                </Filters>

            </ContainerFilters>

            <ContainerRestaurants>

                {BlocksRestaurants.map((item) => (
                    <OptionRestaurant key={item.key}>

                        <Img source={item.img} />

                        <InfoRestaurantes>

                            <InfoLineOne>

                                <Name>{item.name}</Name>

                            </InfoLineOne>

                            <InfoLineTwo>

                                <FontAwesome name="star" size={13} color="#E5A34C" />
                                <Noute>{item.noute}</Noute>
                                <AddInfoOne>{item.infoOne}</AddInfoOne>

                            </InfoLineTwo>

                            <InfoLineThree>

                                <AddInfoTwo>{item.infoTwo}</AddInfoTwo>

                            </InfoLineThree>

                        </InfoRestaurantes>

                    </OptionRestaurant>

                ))}

            </ContainerRestaurants>

    

        </>
    )
}