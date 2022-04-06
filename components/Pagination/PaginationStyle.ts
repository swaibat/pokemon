import styled from "styled-components";
import ReactPaginate from "react-paginate";

const Pagination = styled(ReactPaginate)`
  display: flex;
  list-style: none;
  padding-inline-start: 0;
  & li {
    display: inline-block;
    padding: 0.5em 1em;
    font-size: 0.85rem;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    border: solid 1px #686767;
    background: #383838;
    margin: 3px;
    font-weight: 300;
    cursor: pointer;
  }
  & .selected {
    border: solid 1px #2b60a3;
    color: #ffcb03;
  }
`;

export default Pagination;
