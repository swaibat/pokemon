import { useDispatch, useSelector } from "react-redux";
import Field from "./SearchFieldStyle";
import { State } from "../../redux/store";
import { getAllPokemon, getSearchResults } from "../../redux/pokemonSlice";

const SearchField = () => {
  const dispatch = useDispatch();

  const { limit, pokemon, searchData } = useSelector(({ pokemon }: State) => ({
    limit: pokemon.pokemonList?.data?.count,
    pokemon: pokemon.allPokemon.data,
    searchData: pokemon.searchResults.data,
  }));

  const handleChange = ({ target }: any) => {
    if (!pokemon) {
      dispatch(getAllPokemon(limit));
    }
    if (target.value.length > 2) {
      const search = pokemon?.filter((pokemon) =>
        pokemon.name.match(target.value.toLowerCase())
      );
      dispatch(getSearchResults(search));
    }
    if (searchData && target.value.length === 2) {
      dispatch(getSearchResults());
    }
  };
  
  return (
    <Field
      type="search"
      onChange={handleChange}
      placeholder="search for pokemon"
    />
  );
};

export default SearchField;
