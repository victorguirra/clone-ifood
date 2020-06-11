import React from 'react';

import {Container, TitleDay, Wrapper, BoxRequire, BoxHeader, Img, InfoBlock,InfoOne, InfoTwo, BoxBody, Amount, AmountValue, Order, BoxFooter, ButtonHelp, LabelButtonHelp, ButtonDetails , LabelButtonDetails} from './styles.js'

import nathely from '../../images/nathely.jpg'

export default function OrdersPlaced() {
    return(
        <Container>

            <TitleDay>Ter, 04 fevereiro 2020</TitleDay>

            <Wrapper>

                <BoxRequire>

                    <BoxHeader>

                        <Img source={nathely} alt="Ícone Pizzaria" />

                        <InfoBlock>

                            <InfoOne>Nathely Pizzaria</InfoOne>

                            <InfoTwo>Pedido Confirmado | 0708</InfoTwo>

                        </InfoBlock>

                    </BoxHeader>

                    <BoxBody>

                        <Amount>

                            <AmountValue>1</AmountValue>

                        </Amount>

                        <Order>Pizza + Refri 1L apenas R$35,90</Order>

                    </BoxBody>

                    <BoxFooter>

                        <ButtonHelp>

                            <LabelButtonHelp>Ajuda</LabelButtonHelp>

                        </ButtonHelp>

                        <ButtonDetails>

                            <LabelButtonDetails>Detalhes</LabelButtonDetails>

                        </ButtonDetails>

                    </BoxFooter>

                </BoxRequire>
                
            </Wrapper>

        </Container>
    )
}

