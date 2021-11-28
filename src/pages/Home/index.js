import React from "react";
import { Wrapper, ImagemLogo, ViewLogo  } from './styles';

import LogoTelaHome from '../../../assets/image/LogoHome.png';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Favorites from './Menu/Favorites';
import Search from './Menu/Search';
import All from './Menu/All';
const Tab = createMaterialTopTabNavigator();

export default function Home(){

  return(
    <Wrapper>
      <ViewLogo>
        <ImagemLogo 
          resizeMode="center"
          source={LogoTelaHome}
        />
      </ViewLogo>

      <Tab.Navigator>
        <Tab.Screen name="Favoritos" component={Favorites} />
        <Tab.Screen name="Procurar" component={Search} />
        <Tab.Screen name="Ver todos" component={All} />
      </Tab.Navigator>
    </Wrapper>
  ) 
}