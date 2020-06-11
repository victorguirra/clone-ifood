import React from 'react';
import {Entypo} from '@expo/vector-icons'

import {Wrapper, Container, InfoBanner, TitleBanner} from './styles.js'


export default function BannerSelectRestaurant(){
    return(
        <Wrapper>

            <Container>

                <InfoBanner>

                    <TitleBanner>Seleção de restaurantes</TitleBanner>
                    <Entypo name="chevron-right" size={18} color="#fff" />

                </InfoBanner>

            </Container>

        </Wrapper>
    )
}