import axios from "axios";
import Router from "./config";

const server = {
  getPokemonList: (limit?: number, offset?: Number) =>
    Router.get(offset ? `?limit=${limit}&offset=${offset}` : `?limit=${limit}`),
  getPokemon: (pokemonId: String) => Router.get(`/${pokemonId}`),
  getPokemonDetails: (url: String) => axios.get(`${url}`),
};

export default server;
