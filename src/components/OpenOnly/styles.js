import styled from 'styled-components/native';

export const Wrapper = styled.View``;


export const BlockTitles = styled.View`
    width:335px;
    margin-left:10px;
    margin-top:35px;
    flex-direction: row;
    align-items:center;
    justify-content:space-between
`;

export const TitleOpenOnly = styled.Text`
    font-size:17px;
    font-weight:bold
`;

export const ButtonViewMore = styled.TouchableOpacity``;

export const ViewMore = styled.Text`
    font-size:14px;
    color:#ff0000;
`;

export const Container = styled.ScrollView.attrs(() => ({
    horizontal:true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle:{
        alignItens: 'center',
    }
}))``


export const Option = styled.TouchableOpacity`
    margin-right:5px;
    margin-top:20px;
    margin-left:10px;
    align-items:center;
    width:85px;
`;

export const Img = styled.Image`
    width:65px;
    height:65px;
    border-radius:32.5px;
`;

export const Label = styled.Text`
    text-align:center;
    margin-top:15px;
    font-size:12px;
    color:#5c5858;
`;