import axios from "axios";

const Router = axios.create({
  baseURL: `https://pokeapi.co/api/v2/pokemon`,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default Router;