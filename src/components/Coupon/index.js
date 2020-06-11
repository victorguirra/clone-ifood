import React from 'react'
import {FontAwesome, Entypo} from '@expo/vector-icons'

import {Wrapper, Container, InfoCoupon, Infos, CouponValue, CouponShelfLife} from './styles.js'

export default function Coupon(){
    return(

        <Wrapper>

            <Container>

                <InfoCoupon>

                    <FontAwesome name="ticket" size={30} color="#ff0000" />

                    <Infos>

                        <CouponValue>Cupom de R$5</CouponValue>

                        <CouponShelfLife>Valido até 09/06</CouponShelfLife>

                    </Infos>

                </InfoCoupon>

                <Entypo name="chevron-right" size={18} color="#ff0000" />

            </Container>

        </Wrapper>
    )
}