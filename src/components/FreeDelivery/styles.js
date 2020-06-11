import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs(() => ({
    horizontal:true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle:{
        alignItems:'center',
    }
}))``;

export const Option = styled.TouchableOpacity`
    align-items:center;
    justify-content:center;
    margin-right:13px;
    margin-left:10px;
    margin-top:30px
`;

export const Img = styled.Image`
    width:315px;
    height:150px;
    border-radius:5px;
`;