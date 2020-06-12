import styled from 'styled-components/native';

export const Container = styled.ScrollView``;

export const Header = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
    padding:0 15px;
    padding-top:20px;
    padding-bottom:12px;
    justify-content:space-between;
    border-bottom-color:#c4c2c2;
    border-bottom-width:0.5px;
    border-style: solid;
`;

export const HeaderInfos = styled.View`
    flex-direction:row;
    align-items:center;
`;

export const Img = styled.Image`
    width:60px;
    height:60px;
    border-radius:30px;
`;

export const Infos = styled.View`
    margin-left:15px;
`;

export const Name = styled.Text`
    font-weight:bold;
    font-size:18px;
`;

export const EditProfile = styled.Text`
    color:#6e6b6b;
`;
