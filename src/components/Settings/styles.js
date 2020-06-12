import styled from 'styled-components/native';

export const Container = styled.View`
    align-items:center;
    margin-top:80px;
    margin-bottom:80px;
`;

export const Option = styled.TouchableOpacity`
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
    width:335px;
    height:60px;
    margin-top:10px;
    padding:10px 15px;
    border-bottom-color:#d3d3d3;
    border-bottom-width:1px;
`;

export const Infos = styled.View`
    flex-direction:row;
    align-items:center;
`;

export const TitleOption = styled.Text`
    color:#808080
    font-size:17px;
    margin-left:15px;
`;