import React from "react";
import { Container, InputSearch, ImagemSearch } from './styles';
import IconSearch from  '../../../../../assets/image/search.png';

export default function SearchScreen(){
  return(
    <Container>
      <InputSearch
        placeholder="Procure por pokémons"
        autoCorrect={false}
        onChangeText={() => {}}
      />
      <ImagemSearch 
        resizeMode="contain"
        source={IconSearch}
      />
    </Container>
  );
}
