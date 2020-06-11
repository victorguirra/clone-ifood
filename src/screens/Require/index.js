import React from 'react';
import {StyleSheet, Platform} from 'react-native';

import {Container, Header, HeaderTitle, HeaderOptions ,ButtonPrevious, LabelButtonPrevious, ButtonInProgress, LabelButtonInProgress, Body} from './styles.js';

import OrdersPlaced from '../../components/OrdersPlaced/index.js'

export default function Require(){
    return(

        <Container style={styles.container}>

            <Header>

                <HeaderTitle>PEDIDOS</HeaderTitle>

                <HeaderOptions>

                    <ButtonPrevious>

                        <LabelButtonPrevious>ANTERIORES</LabelButtonPrevious>

                    </ButtonPrevious>

                    <ButtonInProgress>

                        <LabelButtonInProgress>EM ANDAMENTO</LabelButtonInProgress>

                    </ButtonInProgress>

                </HeaderOptions>

            </Header>

            <Body>

                <OrdersPlaced />

            </Body>

        </Container>
    )
}
    
const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "android" ? 60 : 0
    }
})