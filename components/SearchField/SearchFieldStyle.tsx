import styled from "styled-components";

const Field = styled.input`
  display: block;
  width: 30rem;
  margin-right: 2rem;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #979cb0;
  background-color: #383838;
  background-clip: padding-box;
  border: 1px solid #383838;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    box-shadow: none;
  }
`;
export default Field;

