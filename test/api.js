import axios from "axios";

export const fetchPokemons = (params) =>
  axios.get("https://pokeapi.co/api/v2/pokemon", { params });
