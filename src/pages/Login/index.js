import React from 'react';
import { KeyboardAvoidingView} from 'react-native';
import {
  Wrapper, 
  Container, 
  Input, 
  Button, 
  ImagemLogo, 
  TextLogin, 
  ImageBottom, 
  TextEntrar 
} from './styles';

import LogoTelaLogin from '../../../assets/image/LogoPokemon.png';
import ImageBottomLogin from '../../../assets/image/ImageBottomLogin.png';


export default function Login({navigation}) {
  return (
    <Wrapper>
        <Container>
        <KeyboardAvoidingView>

          <ImagemLogo 
            resizeMode="contain"
            source={LogoTelaLogin}
          />

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

        </KeyboardAvoidingView>
        </Container>
    </Wrapper>
  );
}
