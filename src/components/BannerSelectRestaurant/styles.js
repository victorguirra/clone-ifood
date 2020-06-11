import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
    justify-content:center;
    align-items:center;
`;

export const Container = styled.View`
    background-color:#000;
    height:70px;
    width:335px;
    border-radius:5px;
    margin-top:30px;
    justify-content:center;
`;

export const InfoBanner = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-between
    padding-left:40px;
    padding-right:20px;
`;

export const TitleBanner = styled.Text`
    color:#fff;
    font-weight:bold;
    font-size:16px;
`;