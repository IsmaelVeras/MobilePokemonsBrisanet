import React, { useEffect, useState } from "react";
import { FlatList} from 'react-native';
import { 
  Container, 
  ImagePokemon, 
  CardPokemon, 
  TextName, 
  TextId, 
  ButtonVerDetalhes, 
  TextDetalhes,
} from './styles';

import api from '../../../../services/api';

export default function AllScreen(){
  const [pokemons, setPokemons] = useState([])
  
  // carregar todas as informações de inicialização
  useEffect(() => {
    api.get('/pokemon', {
      headers: {
        'Accept': 'application/json'
      }
    }).then(res => {
      setPokemons(res.data.results)
    })
  }, [])

  return(
    <Container>
      <FlatList
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.name}
        contentContainerStyle={{flexGrow: 1}}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={PokemonShow}
      />
    </Container>
  )
}

function PokemonShow(item) {
  const { name, url } = item.item
  const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
  const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+pokemonNumber+'.png';

  return(
    <Container>
        <CardPokemon>
          <ImagePokemon source={{uri: imageUrl}}/>
          <TextName>{name}</TextName>
          <TextId>ID:{pokemonNumber}</TextId>
          <ButtonVerDetalhes onPress={() => navigation.navigate('')} >
             <TextDetalhes>Ver detalhes</TextDetalhes>
          </ButtonVerDetalhes>
        </CardPokemon>
    </Container>
  )
}
