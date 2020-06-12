import styled from 'styled-components/native';

export const Container = styled.View`
    align-items:center;
`;

export const Option = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width:335px;
    height:60px;
    margin-top:10px;
    padding:10px 15px;
    border-bottom-color:#d3d3d3;
    border-bottom-width:1px;
`;

export const BlockInfo = styled.View`
    flex-direction:row;
    align-items:center;
`;

export const Infos = styled.View`
    margin-left:15px;
`;

export const TitleOption = styled.Text`
    font-size:18px;
    color:#424040;
`;

export const InfoOption = styled.Text`
    color:#808080;
`;