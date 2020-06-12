import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    justify-content:center;
    align-items:center;
`

export const BlockPresent = styled.View`
    flex-direction:row;
    align-items:center;
    border-color:#c4c2c2;
    border-width:0.7px;
    border-radius:5px;
    width:335px;
    margin-top:10px;
    height:75px;
    padding:10px 15px;
    justify-content:space-between;
`;

export const Infos = styled.View`
    flex-direction: row;
`;

export const Description = styled.View`
    margin-left:20px;
`;

export const PresentText = styled.Text`
    font-weight:bold;
    font-size:15px;
`; 

export const Invitation = styled.Text`
    color:#6e6b6b;
`;