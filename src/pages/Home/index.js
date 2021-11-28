import React from "react";
import { KeyboardAvoidingView} from 'react-native';
import {
  Wrapper, 
  Container,
  ImagemLogo
} from './styles';

import LogoTelaHome from '../../../assets/image/LogoHome.png';

export default function Home(){
  return(
    <Wrapper>
      <KeyboardAvoidingView>
        <ImagemLogo 
          resizeMode="contain"
          source={LogoTelaHome}
        />
      </KeyboardAvoidingView>
    </Wrapper>
  )
}