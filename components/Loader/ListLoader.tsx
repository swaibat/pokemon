import { Flex } from "../Flex";
import { ListItem } from "../ListItem";
import { Skelton } from "./Skelton";

export default function ListLoader() {
  return (
    <>
      {Array.from({ length: 16 }).map((e, i) => (
        <span key={i} style={{ width: "25%" }}>
          <ListItem>
            <Flex column w100 itemsCenter>
              <Skelton stl={{ h: 90, w: 100, mb: 3 }} />
              <Skelton stl={{ h: 17, w: 70, mb: 3 }} />
            </Flex>
          </ListItem>
        </span>
      ))}
    </>
  );
}
