import styled from "styled-components";
import { Flex } from "../Flex";

export const Skelton = styled(Flex)`
  background: #777;
  border-radius: 3px;
  animation: shimmer 2s infinite linear;
  background: linear-gradient(to right, #272727 4%, #1b1b1b 25%, #272727 36%);
  background-size: 1000px 100%;
`;
