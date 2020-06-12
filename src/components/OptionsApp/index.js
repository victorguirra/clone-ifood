import React from 'react';

import {MaterialCommunityIcons, Entypo} from '@expo/vector-icons'

import {Container,  Option, BlockInfo, Infos, TitleOption, InfoOption} from './styles.js'

const items = [
    {
        key: String(Math.random()),
        title:'Chats',
        info:'Minhas Conversas',
        icon:{
            lib: MaterialCommunityIcons,
            name: 'chat-outline',
            size: 27,
            color:"#424040",
        },
    },
    {
        key: String(Math.random()),
        title:'Notificações',
        info:'Minha central de notificações',
        icon:{
            lib: MaterialCommunityIcons,
            name: 'bell-outline',
            size: 27,
            color:"#424040",
        },
    },
    {
        key: String(Math.random()),
        title:'Carteira',
        info:'Meu saldo e QR code',
        icon:{
            lib: MaterialCommunityIcons,
            name: 'wallet-outline',
            size: 27,
            color:"#424040",
        },
    },
    {
        key: String(Math.random()),
        title:'Cupons',
        info:'Meus cupons de desconto',
        icon:{
            lib: MaterialCommunityIcons,
            name: 'ticket-outline',
            size: 27,
            color:"#424040",
        },
    },
    {
        key: String(Math.random()),
        title:'Favoritos',
        info:'Meus Locais Favoritos',
        icon:{
            lib: MaterialCommunityIcons,
            name: 'heart-outline',
            size: 27,
            color:"#424040",
        },
    },
    {
        key: String(Math.random()),
        title:'Pagamento',
        info:'Minhas formas de pagamento',
        icon:{
            lib: MaterialCommunityIcons,
            name: 'credit-card-outline',
            size: 27,
            color:"#424040",
        },
    },
    {
        key: String(Math.random()),
        title:'Endereços',
        info:'Meus endereços de entrega',
        icon:{
            lib: MaterialCommunityIcons,
            name: 'map-marker-outline',
            size: 27,
            color:"#424040",
        },
    },
    
]

export default function OptionsApp(){
    return(

        <Container>

            {items.map((item) => (
                <Option key={item.key}>
                        
                    <BlockInfo>

                        <MaterialCommunityIcons name={item.icon.name} size={item.icon.size} color={item.icon.color} />

                        <Infos>
                            
                            <TitleOption>{item.title}</TitleOption>

                            <InfoOption>{item.info}</InfoOption>
                            
                        </Infos>

                    </BlockInfo>

                    <Entypo name="chevron-right" size={17} color="#808080" />

                    </Option>
                ))}

          
            
        </Container>
    )
}