import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

import {Container, ContainerGeneral,Title, ContainerLeft, OptionsColumnLeft, OptionLeft, LabelLeft, ContainerRight, OptionsColumnRight, OptionRight, LabelRight} from './styles.js';

import doceseBolos from '../../images/categoriesDoceseBolos.jpg'
import acai from '../../images/categoriesAcai.jpg'
import cafeteria from '../../images/categoriesCafeteria.jpg'
import carnes from '../../images/categoriesCarnes.jpg'
import frutosDoMar from '../../images/categoriesFrutosdoMar.jpg'
import hotDog from '../../images/categoriesHotDog.jpg';
import iceCream from '../../images/categoriesIceCream.jpg';
import italiana from '../../images/categoriesItaliana.jpg';
import japonesa from '../../images/categoriesJaponesa.jpg';

import lanches from '../../images/categoriesLanches.jpg';
import mercado from '../../images/categoriesMercado.jpg';
import mexicana from '../../images/categoriesMexicana.jpg';
import padaria from '../../images/categoriesPadaria.jpg';
import pizza from '../../images/categoriesPizza.jpg';
import refrigerantes from '../../images/categoriesRefrigerantes.jpg';
import salgados from '../../images/categoriesSalgados.jpg';
import saudavel from '../../images/categoriesSaudavel.jpg';
import sopaseCaldos from '../../images/categoriesSopaseCaldos.jpg';

const itemsLeft = [
    {
        key: String(Math.random()),
        img: doceseBolos,
        label: 'Doces e Bolos'
    },
    {
        key: String(Math.random()),
        img: acai,
        label: 'Açaí'
    },
    {
        key: String(Math.random()),
        img: cafeteria,
        label: 'Cafeteria'
    },
    {
        key: String(Math.random()),
        img: carnes,
        label: 'Carnes'
    },
    {
        key: String(Math.random()),
        img: frutosDoMar,
        label: 'Frutos do Mar'
    },
    {
        key: String(Math.random()),
        img: iceCream,
        label: 'Sorvetes'
    },
    {
        key: String(Math.random()),
        img: japonesa,
        label: 'Japonesa'
    },
    {
        key: String(Math.random()),
        img: hotDog,
        label: 'Hot Dog'
    },
    {
        key: String(Math.random()),
        img: italiana,
        label: 'Italiana'
    },
]

const itemsRight = [
    {
        key: String(Math.random()),
        img: lanches,
        label: 'Lanches'
    },
    {
        key: String(Math.random()),
        img: mercado,
        label: 'Mercado'
    },
    {
        key: String(Math.random()),
        img: mexicana,
        label: 'Mexicana'
    },
    {
        key: String(Math.random()),
        img: padaria,
        label: 'Padaria'
    },
    {
        key: String(Math.random()),
        img: pizza,
        label: 'Pizza'
    },
    {
        key: String(Math.random()),
        img: refrigerantes,
        label: 'Bebidas'
    },
    {
        key: String(Math.random()),
        img: salgados,
        label: 'Salgados'
    },
    {
        key: String(Math.random()),
        img: saudavel,
        label: 'Saudável'
    },
    {
        key: String(Math.random()),
        img: sopaseCaldos,
        label: 'Sopas e Caldors'
    },
    
]

export default function Categories(){
    return(

        <Container>

            <Title>Categorias</Title>

            <ContainerGeneral>


                <ContainerLeft>

                    <OptionsColumnLeft>

                        {itemsLeft.map((itemLeft) => (
                            
                            <OptionLeft key={itemLeft.key}>

                                <ImageBackground source={itemLeft.img} style={styles.imageBackground}>

                                    <LabelLeft>{itemLeft.label}</LabelLeft>

                                </ImageBackground>

                            </OptionLeft>
                        ))}

                    </OptionsColumnLeft>

                </ContainerLeft>

                <ContainerRight>

                    <OptionsColumnRight>

                        {itemsRight.map((itemRight) => (
                            
                            <OptionRight key={itemRight.key}>

                                <ImageBackground source={itemRight.img} style={styles.imageBackground}>
                                    
                                    <LabelRight>{itemRight.label}</LabelRight>

                                </ImageBackground>
                            
                            </OptionRight>
                            
                        ))}

                    </OptionsColumnRight>

                </ContainerRight>

            </ContainerGeneral>

        </Container>    
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        width:160,
        height:80,
        paddingLeft: 10,
        paddingTop: 10,
        borderRadius: 10,
        overflow: 'hidden',
        opacity:0.85
    }
})