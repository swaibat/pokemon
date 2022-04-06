import { Flex } from "../Flex";
import { Skelton } from "./Skelton";

const Loader = () => {
  return (
    <Flex>
      <Flex itemsCenter>
        <Flex column>
          <Skelton stl={{ h: 29, w: 100, mb: 7 }} />
          <Skelton stl={{ h: 23, w: 200, mb: 7 }} />
        </Flex>
        <Skelton stl={{ h: 20.5, w: 200, mb: 15, ml: "auto" }} />
      </Flex>
      <Skelton stl={{ h: 350, w: 700 }} />
    </Flex>
  );
};

export default Loader;
