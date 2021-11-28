import React from 'react';
import {
  Wrapper, 
  Container, 
  Input, 
  Button, 
  ImagemLogo, 
  TextLogin, 
  ImageBottom, 
  TextEntrar,
  ViewLogo
} from './styles';

import LogoTelaLogin from '../../../assets/image/LogoPokemon.png';
import ImageBottomLogin from '../../../assets/image/ImageBottomLogin.png';

export default function Login({navigation}) {
  return (
    <Wrapper>
        <Container>
          
          <ViewLogo>
            <ImagemLogo 
              resizeMode="contain"
              source={LogoTelaLogin}
            />
          </ViewLogo>

        <TextLogin>
          Comece a coletar pokémons!
        </TextLogin>

        {/* Input Email */}
        <Input 
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        {/* Input Senha */}
        <Input 
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        {/* Botão Entrar */}
        <Button
          onPress={() => navigation.navigate('Home')}
        >
          <TextEntrar>Entrar</TextEntrar>
        </Button>

        <ImageBottom
            resizeMode="cover"
            source={ImageBottomLogin}
        />

        </Container>
    </Wrapper>
  );
}
