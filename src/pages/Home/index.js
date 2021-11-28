import React from "react";
import { Wrapper, ImagemLogo, ViewLogo  } from './styles';

import LogoTelaHome from '../../../assets/image/LogoHome.png';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FavoritesScreen from '../TabMenu/FavoritesScreen';
import SearchsScreen from '../TabMenu/SearchScreen';
import AllScreen from '../TabMenu/AllScreen';
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
        <Tab.Screen name="Favoritos" component={FavoritesScreen} />
        <Tab.Screen name="Procurar" component={SearchsScreen} />
        <Tab.Screen name="Ver todos" component={AllScreen} />
      </Tab.Navigator>
    </Wrapper>
  ) 
}