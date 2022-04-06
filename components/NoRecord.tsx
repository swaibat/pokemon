import { Flex } from "./Flex";
import { Typography } from "./Typography";

const NoRecord = ({ data }: any) => {
  return (
    <Flex style={{ height: "70vh", width: "100%" }}>
      <Typography
        size="md"
        style={{ textTransform: "capitalize", margin: "auto" }}
      >
        {!data.data ? "No results found" : "No search results Found"}
      </Typography>
    </Flex>
  );
};

export default NoRecord;
