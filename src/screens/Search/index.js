import React from 'react';
import {StyleSheet, Platform} from 'react-native'
import {Feather} from '@expo/vector-icons'

import {Container, SearchSpace, IconSearch, BlockInputSearch, SearchInput} from './styles.js'

import Categories from '../../components/Categories/index.js'

export default function Search(){
   
    return(
        
        <Container style={styles.container}>

            <SearchSpace>

                <BlockInputSearch>

                    <IconSearch>

                        <Feather name="search" size={24} color="#ff0000" />

                    </IconSearch>

                    <SearchInput placeholder="Item ou loja" placeholderTextColor="#9c9898" />

                </BlockInputSearch>

            </SearchSpace>

            <Categories />

        </Container>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "android" ? 60 : 0,
    },
});