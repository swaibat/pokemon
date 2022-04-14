import type { NextPage } from "next";
import { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { ListItem } from "../components/ListItem";
import { Typography } from "../components/Typography";
import { getPokemonList } from "../redux/pokemonSlice";
import { State } from "../redux/store";
import ListLoader from "../components/Loader/ListLoader";
import { Flex } from "../components/Flex";
import Img from "../components/Img";
import { PokemonDetail } from "../redux/Interface";
import Pagination from "../components/Pagination";
import NoRecord from "../components/NoRecord";

const Pokemon: NextPage = () => {
  const limit = 16;
  const dispatch = useDispatch();

  const { searchData, pokemon } = useSelector(({ pokemon }: State) => ({
    pokemon: pokemon.pokemonList,
    searchData: pokemon.searchResults,
  }));

  useEffect(() => {
    dispatch(getPokemonList({ limit }));
  }, [dispatch]);

  const results = searchData.data ? searchData.data : pokemon.data?.results;
  const loading = pokemon.loading || searchData.loading

  return (
    <Flex flexWrap>
      {!loading && results?.map((pokemon: PokemonDetail) => (
        <Flex key={pokemon.id} w25>
          <Link href={`/pokemon/[id]`} as={`/pokemon/${pokemon.id}`} passHref>
            <ListItem w100>
              <Img src={pokemon.sprites} alt={pokemon.name} />
              <Typography>{pokemon.name}</Typography>
            </ListItem>
          </Link>
        </Flex>
      ))}
      {loading && <ListLoader />}
      {!searchData.data && <Pagination />}
      {results && !results.length && <NoRecord data={searchData} />}
    </Flex>
  );
};

export default Pokemon;
