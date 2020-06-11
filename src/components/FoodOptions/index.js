import React from 'react';

import {Container, Option, Img, Label} from './styles.js'

import carnes from '../../images/carnes.jpg'
import italiana from '../../images/italiana.jpg'
import japonesa from '../../images/japonesa.jpg'
import padaria from '../../images/padaria.jpg'
import pizza from '../../images/pizza.jpg'
import docesebolos from '../../images/docesebolos.jpg'
import sorvetes from '../../images/sorvetes.jpg'
import mercado from '../../images/mercado.jpg'
import saudavel from '../../images/saudavel.jpg'

const items = [
    {
        key: String(Math.random()),
        img: carnes,
        label: 'Carnes',
    },
    {
        key: String(Math.random()),
        img: italiana,
        label: 'Italiana',
    },
    {
        key: String(Math.random()),
        img: japonesa,
        label: 'Japonesa',
    },
    {
        key: String(Math.random()),
        img: padaria,
        label: 'Padaria',
    },
    {
        key: String(Math.random()),
        img: pizza,
        label: 'Pizza',
    },
    {
        key: String(Math.random()),
        img: docesebolos,
        label: 'Doces e Bolos',
    },
    {
        key: String(Math.random()),
        img: sorvetes,
        label: 'Sorvetes',
    },
    {
        key: String(Math.random()),
        img: mercado,
        label: 'Mercado',
    },
    {
        key: String(Math.random()),
        img: saudavel,
        label: 'Saudavel',
    },
]

export default function FoodOptions(){
    return(

        <Container>
            
            {items.map((item) => (
                <Option key={item.key}>

                    <Img source={item.img} />
                    <Label>{item.label}</Label>

                </Option>

            ))}

        </Container>
    )
} 