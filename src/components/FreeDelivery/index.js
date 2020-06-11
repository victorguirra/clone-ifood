import React from 'react';

import {Container, Option, Img} from './styles.js'

import sorveteria from '../../images/sorveteria.jpg';
import compras from '../../images/compras.jpg';
import almoco from '../../images/almoco.jpg';

const items = [
    {
        key: String(Math.random()),
        img: compras,
    },
    {
        key: String(Math.random()),
        img: almoco,
    },
    {
        key: String(Math.random()),
        img: sorveteria,
    },
]

export default function FreeDelivery(){
    return(
        <Container>

                {items.map((item) => (
                <Option key={item.key}>

                    <Img source={item.img} />

                </Option>

            ))}

        </Container>
    )
}
