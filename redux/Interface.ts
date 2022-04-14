export interface Pagination {
  limit: number;
  offset?: number;
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetail {
  id: number;
  name: string;
  weight: Number;
  sprites: {
    other: {
      dream_world: {
        front_default: string | undefined;
      };
      home: {
        front_default: string | undefined;
      };
      "official-artwork": {
        front_default: string | undefined;
      };
    };
  };
  moves: Array<{
    move: {
      name: string;
    };
  }>;
  species: {
    name: string;
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
}

export interface PokemonState {
  pokemonList: {
    data: {
      count: Number | any;
      results: Array<PokemonDetail> | null;
    } | null;
    loading: Boolean;
  };
  pokemon: {
    data: PokemonDetail | null;
    loading: Boolean;
  };
  allPokemon: {
    data: Array<Pokemon> | null;
    loading: Boolean;
  };
  searchResults: {
    data: Array<PokemonDetail> | null;
    loading: Boolean;
  };
}
