import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs(() => ({
    horizontal:true,
    showsHorizontalScrollIndicator:false,
    contentContainerStyle:{
        alignItems:'center',
    }
}))``;

export const Option = styled.TouchableOpacity`
    justify-content:center;
    margin-right:10px;
    margin-left:10px;
    margin-top:30px;
`;

export const Img = styled.Image`
    width:110px;
    height:70px;
    border-radius:5px;
`; 

export const Label = styled.Text`
    text-align:center;
    margin-top:10px;
    font-size:13px;
    color: #787272;
    font-weight:100;
`;