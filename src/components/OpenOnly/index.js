import React from 'react';

import {Wrapper, BlockTitles, TitleOpenOnly, ButtonViewMore, ViewMore, Container, Option, Img, Label} from './styles.js';

import madero from '../../images/madero.jpg';
import mcdonalds from '../../images/mcdonalds.png';
import lifebox from '../../images/lifebox.png';
import cocobambu from '../../images/cocobambu.jpg';
import paprica from '../../images/paprica.png';
import rangar from '../../images/rangar.jpg';
import croassonho from '../../images/croassonho.png';

const items = [
    {
        key: String(Math.random()),
        img: madero,
        label: 'Madero - Águas Claras',
    },
    {
        key: String(Math.random()),
        img: mcdonalds,
        label: 'Mc Donalds - Águas Claras',
    },
    {
        key: String(Math.random()),
        img: lifebox,
        label: 'Lifebox Burguer',
    },
    {
        key: String(Math.random()),
        img: cocobambu,
        label: 'Coco Bambu - Parkshopping',
    },
    {
        key: String(Math.random()),
        img: paprica,
        label: 'Páprica - Águas Claras',
    },
    {
        key: String(Math.random()),
        img: rangar,
        label: 'Rangar - Taguatinga',
    },
    {
        key: String(Math.random()),
        img: croassonho,
        label: 'Croassonho - Águas Claras',
    },
]

export default function OpenOnly(){
    return(
        <Wrapper>

            <BlockTitles>

                <TitleOpenOnly>Abertos só no iFood</TitleOpenOnly>

                <ButtonViewMore>

                    <ViewMore>Ver Mais</ViewMore>

                </ButtonViewMore>

            </BlockTitles>

            <Container>
                
                {items.map((item) => (

                    <Option key={item.key}>

                        <Img source={item.img} />
                        <Label>{item.label}</Label>

                    </Option>
                ))}

            </Container>

        </Wrapper>
    )
}