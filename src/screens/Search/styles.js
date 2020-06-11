import styled from 'styled-components/native';

export const Container = styled.ScrollView``;

export const SearchSpace = styled.View`
    align-items:center;
    margin-top:15px;
`;

export const IconSearch = styled.TouchableOpacity``;

export const BlockInputSearch = styled.View`
    flex-direction:row;
    background-color:#dedede;
    width:335px;
    justify-content:space-between
    align-items:center;
    padding-left:10px;
    border-radius:7px;
`;

export const SearchInput = styled.TextInput`
    height:45px;
    width:290px;
    padding-left:10px;
`;