import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background: #fff;
`;

export const Container = styled.SafeAreaView`
  padding: 0 20px;
  justify-content: center;
  
`;

export const Input = styled.TextInput`
  border: 1px solid #7D7E80;
  width: 100%;
  margin-bottom: 15px;
  font-size: 16px;
  border-radius: 7px;
  padding: 20px;
  
`;

export const Button = styled.TouchableOpacity`
    background-color: #FFCB05;
    width: 100%;
    height: 60px;
    margin-bottom: 450px;
    border-radius: 7px;
    align-items: center;
    justify-content:center;
`;

export const ImagemLogo = styled.Image`
    overflow: hidden;
    width: 65%;
    height: 35%;
    margin-left: 50px;
    margin-bottom: -50px;
`;

export const ImageBottom = styled.Image`
  position: absolute;
  z-index: -1;
  flex: 1;  
  width: 419.07px;
  height: 456.55px;
  left: -38.75px;
  top: 682.91px;
  transform: rotate(3.93deg);
`;

export const TextLogin = styled.Text`
    font-size:30px;
    font-weight: bold;
    line-height: 36px;
    margin-bottom: 40px;
`;

export const TextEntrar = styled.Text`
    font-size:20px;
`;
