import React from "react";
import { Container, TextTitle, TextSubTitle, ImageCenter, Button, TextProcurarPokemons } from './styles';

import Astronaut from '../../../../../assets/image/Astronaut-1.png';

export default function FavoritesScreen(){
  return(
    <Container>
        <ImageCenter source={Astronaut} />
        <TextTitle>Está meio vazio por aqui!</TextTitle>
        <TextSubTitle>
          Procure por pokémons para adicioná-los aos seus favoritos.
        </TextSubTitle>

        <Button>
          <TextProcurarPokemons>Procurar pokémons</TextProcurarPokemons>
        </Button>
    </Container>
  );
}
