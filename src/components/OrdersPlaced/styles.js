import styled from 'styled-components/native';

export const Container = styled.View``;

export const TitleDay = styled.Text`
    font-weight:bold;
    font-size:16px;
    margin-left:15px;
    margin-top:10px;
`;

export const Wrapper = styled.View`
    align-items:center;

`;

export const BoxRequire = styled.View`
    background-color:#fff;
    width:330px;
    height:210px;
    border-radius:7px;
    margin-top:10px;
    align-items:center;
`;

export const BoxHeader = styled.View`
    flex-direction: row;
    padding:15px;
    align-items:center;
    border-bottom-color:#d3d3d3;
    border-bottom-width:1px;
    width:300px;
`;

export const Img = styled.Image`
    width:60px;
    height:60px;
    border-radius:30px;
`;

export const InfoBlock = styled.View`
    margin-left:15px;
`;

export const InfoOne = styled.Text``;

export const InfoTwo = styled.Text`
    color:#878484;
`;

export const BoxBody = styled.View`
    flex-direction:row;
    margin-top:10px;
    align-items:center;
    border-bottom-color:#d3d3d3;
    border-bottom-width:1px;
    width:300px;
    padding-bottom:10px;
`;

export const Amount = styled.View`
    border-color:#d3d3d3;
    border-width:1px;
    padding: 2px 7px;;
    align-items:center;
    justify-content:center;
    margin-right:10px;
`;

export const AmountValue = styled.Text`
    color:#878484;
`;

export const Order = styled.Text`
    color:#878484;
`;

export const BoxFooter = styled.View`
    flex-direction:row;
    justify-content:space-between;
    width:300px;
    margin-top:30px;
`;

export const ButtonHelp = styled.TouchableOpacity`
    width:50%;
    align-items:center;
`;

export const LabelButtonHelp = styled.Text`
    font-size:16px;
    color:#ff0000;
`;

export const ButtonDetails = styled.TouchableOpacity`
    width:50%;
    align-items:center;
`;

export const LabelButtonDetails = styled.Text`
    font-size:16px;
    color:#ff0000;
`;
