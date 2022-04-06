import styled from "styled-components";

interface FlexProps {
  stl?: any;
  column?: Boolean;
  itemsCenter?: Boolean;
  w100?: Boolean;
  w25?: Boolean;
  flexWrap?: Boolean;
}

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ column }: FlexProps) => column && "column"};
  width: ${({ stl }: FlexProps) => {
    if (stl?.w) return Number(stl?.w) ? stl.w + "px" : stl.w;
  }};
  height: ${({ stl }: FlexProps) => {
    if (stl?.h) return Number(stl.h) ? stl.h + "px" : stl.h;
  }};
  margin-bottom: ${({ stl }: FlexProps) => {
    if (stl?.mb) return Number(stl.mb) ? stl.mb + "px" : stl.mb;
  }};
  margin-left: ${({ stl }: FlexProps) => {
    if (stl?.ml) return Number(stl.ml) ? stl.ml + "px" : stl.ml;
  }};
  align-items: ${({ itemsCenter }: FlexProps) => itemsCenter && "center"};
  flex-wrap: ${({ flexWrap }: FlexProps) => flexWrap && "wrap"};
  width: ${({ w100, w25 }: FlexProps) => {
    if (w100) return "100%";
    if (w25) return "25%";
  }};
`;
