import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestData = (initialState, path, header) => {
  const [dados, setDados] = useState(initialState);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${path}`)
      .then((response) => {
        const pokemonUrls = response.data.results.map((pokemon) => pokemon.url);
        return axios.all(pokemonUrls.map((url) => axios.get(url)))
      })
      .then((responses) => {
        const pokemonData = responses.map((response) => response.data);
        setDados(pokemonData);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [path]);

  return [dados];
}