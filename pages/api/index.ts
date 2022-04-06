import axios from "axios";
import Router from "./config";

const server = {
  getPokemons: (limit: number, offset: number) =>
    Router.get(`?limit=${limit}&offset=${offset}`),
  getPokemon: (pokemonId: string) => Router.get(`/${pokemonId}`),
  getPokemonDetails: (url: string) => axios.get(`${url}`),
};

export default server;
