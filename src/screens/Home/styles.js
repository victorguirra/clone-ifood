import styled from 'styled-components/native'

export const Wrapper = styled.SafeAreaView`
    flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
    width:335px;
    margin-left:10px
    flex-direction:row;
    padding-top:10px;
    border-bottom-color: #d3d3d3;
    border-bottom-width: 1px;
    border-style:solid;
`;

export const ButtonDelivery = styled.TouchableOpacity`
    border-bottom-color: #ff0000;
    border-bottom-width: 1px;
    border-style:solid;
    padding-bottom:0px;
    padding-left:0px;
`;

export const ButtonWithdrawal = styled.TouchableOpacity`
     padding-left:15px;
`;

export const ButtonDeliveryLabel = styled.Text`
    font-size:17px;
    color:#ff0000;
    padding-bottom:5px;
`;

export const ButtonWithdrawalLabel = styled.Text`
    font-size:17px;
`;

export const Location = styled.View`
    flex-direction: row;
    align-items:center;
    margin-top:15px;
`;

export const LocationInfo = styled.Text`
    margin-left:10px;
    font-size:15px;
    margin-right:8px;
    font-weight:bold;
`;

export const ButtonArrowDown = styled.TouchableOpacity``;