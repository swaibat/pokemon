import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../store";
import { getPokemonList } from "../../pokemon/pokemonSlice";
import Pagination from "./PaginationStyle";

const PagePagination = () => {
  const itemsPerPage = 16;
  const dispatch = useDispatch();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const { data } = useSelector((state: State) => state.pokemon.pokemonList);

  useEffect(() => {
    data?.count && setPageCount(Math.floor(data.count / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event: { selected: number }) => {
    if (data?.count) {
      const newOffset = (event.selected * itemsPerPage) % data.count;
      dispatch(
        getPokemonList({
          limit: itemsPerPage,
          offset: newOffset + itemsPerPage,
        })
      );
      setItemOffset(newOffset);
    }
  };

  return (
    <Pagination
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
    />
  );
};

export default PagePagination;
