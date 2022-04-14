import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { State } from "../../redux/store";
import { Chart } from "../../components/Chart";
import { Flex } from "../../components/Flex";
import Loader from "../../components/Loader/Loader";
import { Typography } from "../../components/Typography";
import { getPokemon } from "../../redux/pokemonSlice";
import { Label } from "../../components/Label";
import Img from "../../components/Img";

const  Pokemon = ()=> {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const { data, loading } = useSelector(
    (state: State) => state.pokemon.pokemon
  );
  useMemo(() => id && dispatch(getPokemon(id)), [dispatch, id]);

  return (
    <>
      {data && (
        <>
          <Flex itemsCenter>
            <Flex column>
              <Flex stl={{ h: 350 }}>
                <Flex column stl={{ w: "auto" }}>
                  <Typography size="lg" primary>
                    {data.name}
                  </Typography>
                  <Img
                    width={450}
                    height={300}
                    src={data.sprites}
                    alt={data.name}
                  />
                </Flex>
                <Flex stl={{ w: 450, ml: "auto" }}>
                  <Chart data={data.stats} />
                </Flex>
              </Flex>
              <Typography gutterBottom>Weight: {data.weight}</Typography>
              <Typography gutterBottom>Species: {data.species.name}</Typography>
              <Typography gutterBottom>
                Types:
                {data.types.map((type, i) => (
                  <Label key={i}>{type.type.name}</Label>
                ))}
              </Typography>
              <Typography>
                moves:
                {data.moves.map((move, i) => (
                  <Label key={i}>{move.move.name}</Label>
                ))}
              </Typography>
            </Flex>
          </Flex>
        </>
      )}
      {!!loading && <Loader />}
    </>
  );
}

export default Pokemon;
