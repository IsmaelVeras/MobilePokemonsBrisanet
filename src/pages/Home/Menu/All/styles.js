import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #f1f1f1;
  padding: 10px;
  padding-left: 5px;
`;

export const CardPokemon = styled.View`
  background-color: white;
  border-radius: 8px;
  align-items: center;
  padding: 29px;
  width: 100%;
`;

export const ImagePokemon = styled.Image`
  width: 120px;
  height: 76.19px;
`;

export const TextName = styled.Text`
  color: rgb(30, 30, 31);
  font-weight: 700;
  font-size: 16.8559px;
  line-height: 25px;
  margin-top: 10%;
  text-transform: capitalize;
`;

export const TextId = styled.Text`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  color: rgb(210, 212, 214);
`;

export const View = styled.View`
  background-color: #FFCB05;
  width: 30%;
  height: 12%;
  border-radius: 7px;
  align-items: center;
  justify-content:center;
  box-shadow: 0px 1.87288px 14.9831px rgba(0, 0, 0, 0.05);
`;

export const ButtonVerDetalhes = styled.TouchableOpacity`
  background-color: #FFCB05;
  width: 100%;
  height: 35px;
  margin-top: 10px;
  margin-bottom: -10px;
  border-radius: 7px;
  align-items: center;
  justify-content:center;
`;

export const TextDetalhes = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: black;
`;