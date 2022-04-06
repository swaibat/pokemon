import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Pagination, Pokemon, PokemonState } from "./Interface";
import api from "./pokemonApi";

const initialState: PokemonState = {
  pokemonList: {
    data: null,
    loading: false,
  },
  pokemon: {
    data: null,
    loading: false,
  },
  allPokemon: {
    data: null,
    loading: false,
  },
  searchResults: {
    data: null,
    loading: false,
  },
};

export const getSearchResults = createAsyncThunk(
  "pokemon/getSearchResults",
  async (pokemonList: Array<Pokemon> | undefined) => {
    if (pokemonList) {
      const data = await Promise.all(
        pokemonList.map(
          async (pokemon: Pokemon) =>
            await (
              await api.getPokemonDetails(pokemon.url)
            ).data
        )
      );
      return data;
    }
    return null;
  }
);

export const getPokemon = createAsyncThunk(
  "pokemon/details",
  async (pokemonId: any) => {
    const response = await api.getPokemon(pokemonId);
    return response.data;
  }
);

export const getAllPokemon = createAsyncThunk(
  "pokemon/all",
  async (limit: number) => {
    const response = await api.getPokemonList(limit);
    return response.data;
  }
);

export const getPokemonList = createAsyncThunk(
  "pokemon/getPokemonList",
  async (pagination: Pagination) => {
    const response = await api.getPokemonList(
      pagination?.limit,
      pagination?.offset
    );
    const data = await Promise.all(
      response.data.results.map(
        async (poke: Pokemon) =>
          await (
            await api.getPokemonDetails(poke.url)
          ).data
      )
    );
    response.data.results = data;
    return response.data;
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPokemon.pending, (state) => {
        state.allPokemon = {
          data: null,
          loading: true,
        };
      })
      .addCase(getAllPokemon.fulfilled, (state, action: any) => {
        state.allPokemon = {
          ...state.allPokemon,
          loading: false,
          data: action.payload.results,
        };
      })
      .addCase(getPokemonList.pending, (state) => {
        state.pokemonList = {
          data: null,
          loading: true,
        };
      })
      .addCase(getPokemonList.fulfilled, (state, action: any) => {
        state.pokemonList = {
          ...state.pokemonList,
          loading: false,
          data: action.payload,
        };
      })
      .addCase(getPokemon.pending, (state) => {
        state.pokemon = {
          data: null,
          loading: true,
        };
      })
      .addCase(getPokemon.fulfilled, (state, action: any) => {
        state.pokemon = {
          data: action.payload,
          loading: false,
        };
      })
      .addCase(getSearchResults.pending, (state) => {
        state.searchResults = {
          data: null,
          loading: true,
        };
      })
      .addCase(getSearchResults.fulfilled, (state, action: any) => {
        state.searchResults = {
          ...state.searchResults,
          loading: false,
          data: action.payload,
        };
      });
  },
});

export default pokemonSlice.reducer;
