import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { State } from "../../store";
import { Chart } from "../components/Chart";
import { Flex } from "../components/Flex";
import Loader from "../components/Loader/Loader";
import { Typography } from "../components/Typography";
import { getPokemon } from "./pokemonSlice";
import { Label } from "../components/Label";
import Img from "../components/Img";

export default function Pokemon() {
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
          <Flex style={{ alignItems: "center" }}>
            <Flex style={{ flexDirection: "column" }}>
              <Flex style={{ height: 350 }}>
                <Flex style={{ flexDirection: "column", width: "auto" }}>
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
                <Flex style={{ width: 450, marginLeft: "auto" }}>
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
                moves:{" "}
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
