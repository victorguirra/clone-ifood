import styled from 'styled-components/native';

export const Container = styled.ScrollView`
`;

export const Header = styled.View`
    align-items:center;
`;

export const HeaderTitle = styled.Text`
    margin-top:5px;
`;

export const HeaderOptions = styled.View`
flex-direction:row;
justify-content:space-between;
border-bottom-color:#d3d3d3;
border-bottom-width:1px;
border-style:solid;
margin-top:20px;
`;

export const ButtonPrevious = styled.TouchableOpacity`
    width:50%;
    align-items:center;
    border-bottom-color:#ff0000;
    border-bottom-width:3px;
    border-style:solid;
`;

export const LabelButtonPrevious = styled.Text`
    font-size:14px;
    color:#ff0000
    margin-bottom:10px;
`;

export const ButtonInProgress = styled.TouchableOpacity`
    width:50%;
    align-items:center;
`;

export const LabelButtonInProgress = styled.Text`
    color:#878484;
    margin-bottom:10px;
`;

export const Body = styled.View`
    background-color:#ebebeb;
`;