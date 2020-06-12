import React from 'react';

import {Container, BlockPresent, Infos, Description, PresentText, Invitation} from './styles.js'

import {SimpleLineIcons, Entypo} from '@expo/vector-icons';


export default function Present(){
    return(
        <Container>

            <BlockPresent>

                <Infos>

                    <SimpleLineIcons name="present" size={27} color="#ff0000" />

                    <Description>

                        <PresentText>Ganhe R$ 15 indicando o iFood</PresentText>
                        <Invitation>Convide seus amigos</Invitation>

                    </Description>

                </Infos>

                <Entypo name="chevron-right" size={17} color="#6e6b6b" />

            </BlockPresent>

        </Container>
    )
}