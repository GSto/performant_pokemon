import { useState, useEffect } from 'react'
import axios from 'axios'

import Pokedex from './Pokedex'

import './App.css'
import './tailwind.output.css'


export const API_URL = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setPokemon(response.data.pokemon)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


  return (
    <div className="App w-full">
      <h1>Pokemeon sortable table demo</h1>
      <Pokedex pokemon={pokemon} />
    </div>
  );
}

export default App;
