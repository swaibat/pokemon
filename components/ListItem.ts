import styled from "styled-components";

interface ListItemProps {
  w100?: Boolean;
  w25?: Boolean;
}

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 30px 10px 10px;
  border-radius: 10px;
  background: #383838;
  margin: 0.5rem;
  cursor: pointer;
  ${(props: ListItemProps) => {
    if (props.w100) return `width:100%`;
    if (props.w25) return `width:25%`;
  }};
`;
