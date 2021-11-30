import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: white;
  padding: 10px;

  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const ImageCenter = styled.Image`
  width: 100%;
  height: 40%;
`;

export const TextTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
  line-height: 36px;

`;

export const TextSubTitle = styled.Text`
  font-size: 16px;
  margin-top: 8px;
  line-height: 20px;
  align-items: center;
`;


export const Button = styled.TouchableOpacity`
  background-color: transparent;
  border: 1px solid #227D7E80;  
  padding: 20px;
  border-radius: 8px;
  width: 70%;
  margin-top: 10%;
  align-items: center;
  justify-content: center;
`;

export const TextProcurarPokemons = styled.Text`
  color:#7D7E80;
`;
