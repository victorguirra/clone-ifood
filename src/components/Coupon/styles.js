import styled from 'styled-components/native'

export const Wrapper = styled.TouchableOpacity``;

export const Container = styled.View`
    border-color:#d9d9d9;
    border-width:0.6px;
    border-radius:8px;
    width:335px;
    margin-left:10px;
    padding:15px;
    margin-top:30px;
    height:65px;
    justify-content:space-between;
    flex-direction:row
    align-items:center;
`;

export const InfoCoupon = styled.View`
    flex-direction:row;
    align-items:center;
`;

export const Infos = styled.View`
    margin-left:15px;
`;

export const CouponValue = styled.Text`
    font-size:15px;
    font-weight:bold;
`;

export const CouponShelfLife = styled.Text`
    font-size:15px;
`;

