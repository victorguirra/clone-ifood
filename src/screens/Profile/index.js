import React from 'react';
import {StyleSheet, Platform} from 'react-native'

import {Entypo} from '@expo/vector-icons';

import {Container, Header, HeaderInfos, Img, Infos, Name, EditProfile} from './styles.js'

import fotoDePerfil from '../../images/fotoPerfil.jpeg';

import Present from '../../components/Present/index.js'
import OptionsApp from '../../components/OptionsApp/index.js'
import Settings from '../../components/Settings/index.js'

export default function Profile(){
    return(
        
        <Container style={styles.container}>

            <Header>

                <HeaderInfos>
                    <Img source={fotoDePerfil} alt="Foto de Perfil" />

                    <Infos>

                        <Name>Victor Hugo Guirra</Name>
                        <EditProfile>Editar Perfil</EditProfile>
                        
                    </Infos>

                </HeaderInfos>

                <Entypo name="chevron-right" size={17} color="#6e6b6b" />

            </Header>

            <Present />

            <OptionsApp />

            <Settings />

        </Container>
    )
};

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "android" ? 60 : 0,
    }
})

