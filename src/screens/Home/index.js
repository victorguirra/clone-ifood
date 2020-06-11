import React from 'react';
import {StyleSheet, Platform} from 'react-native'
import {Entypo} from '@expo/vector-icons'

import {Wrapper,
        Container,
        Header,
        ButtonDelivery,
        ButtonWithdrawal,
        ButtonDeliveryLabel,
        ButtonWithdrawalLabel,
        Location,
        LocationInfo,
        ButtonArrowDown
    } from './styles.js'

import Coupon from '../../components/Coupon/index.js'
import FoodOptions from '../../components/FoodOptions/index.js'
import FreeDelivery from '../../components/FreeDelivery/index.js'
import OpenOnly from '../../components/OpenOnly/index.js'
import BannerSelectRestaurant from '../../components/BannerSelectRestaurant/index.js'
import Restaurants from '../../components/Restaurants/index.js'

const Home = () => {
    return(
        <Wrapper style={styles.container}>
           
            <Container>

                <Header>

                    <ButtonDelivery>

                        <ButtonDeliveryLabel>Entrega</ButtonDeliveryLabel>

                    </ButtonDelivery>

                    <ButtonWithdrawal>

                        <ButtonWithdrawalLabel>Retirada</ButtonWithdrawalLabel>

                    </ButtonWithdrawal>

                </Header>

                <Location>

                    <LocationInfo>Próximo Riacho Fundo,
                            QN 1</LocationInfo>

                    <ButtonArrowDown>

                        <Entypo name="chevron-down" size={18} color ="#ff0000" />

                    </ButtonArrowDown>

                </Location>

                <Coupon />

                <FoodOptions />

                <FreeDelivery />

                <OpenOnly />

                <BannerSelectRestaurant />

                <Restaurants />

            </Container>

        </Wrapper>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? 60 : 0
    }
})

export default Home;

