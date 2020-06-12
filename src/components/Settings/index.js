import React from 'react';

import {AntDesign, Entypo} from '@expo/vector-icons'

import {Container, Option, Infos, TitleOption} from './styles.js';

const items = [
    {
        key: String(Math.random()),
        title: 'Ajuda',
        icon:{
            lib:AntDesign,
            name: 'questioncircleo',
            size:24,
            color:'#808080',
        }
    },
    {
        key: String(Math.random()),
        title: 'Configurações',
        icon:{
            lib:AntDesign,
            name: 'setting',
            size:24,
            color:'#808080',
        }
    },
    {
        key: String(Math.random()),
        title: 'Segurança',
        icon:{
            lib:AntDesign,
            name: 'Safety',
            size:24,
            color:'#808080',
        }
    },
    {
        key: String(Math.random()),
        title: 'Sugerir Restaurantes',
        icon:{
            lib:AntDesign,
            name: 'home',
            size:24,
            color:'#808080',
        }
    },
    {
        key: String(Math.random()),
        title: 'Seja parceiro',
        icon:{
            lib:AntDesign,
            name: 'rocket1',
            size:24,
            color:'#808080',
        }
    },
]

export default function Settings(){
    return(
        <Container>

            {items.map((item) => (
                <Option key={item.key}>

                    <Infos>

                        <AntDesign name={item.icon.name} size={item.icon.size} color={item.icon.color} />

                        <TitleOption>{item.title}</TitleOption>

                    </Infos>

                    <Entypo name="chevron-right" size={17} color="#808080" />   

                </Option>

            ))}

        </Container>
    )
}