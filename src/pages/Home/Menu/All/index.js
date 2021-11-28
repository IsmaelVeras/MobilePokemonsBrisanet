import React, { useEffect, useState } from "react";
import { FlatList, Text} from 'react-native';
import { Container, ImagePokemon, CardPokemon } from './styles';

export default function AllScreen(){

  const [pokemons, setPokemons] = useState([])

  // carregar todas as informações de inicialização
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setPokemons(data.results)
    })
  }, [])

  return(
    <Container>
      <FlatList
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.name}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={PokemonShow}
      >

      </FlatList>
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
        <ImagePokemon 
          style={{width: 200, height: 150}}
          source={{uri: imageUrl}}
        />
        <Text>{id}</Text>
        <Text>{name}</Text>
      </CardPokemon>
    </Container>
  )
}