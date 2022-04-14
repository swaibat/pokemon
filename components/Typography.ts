import styled from "styled-components";

interface TypographyProps {
  primary?: Boolean;
  secondary?: Boolean;
  size?: string;
  gutterBottom?: Boolean;
}
export const Typography = styled.div`
  color: ${(props: TypographyProps) => {
    if (props.primary) return "#FFCB05";
    return "#979cb0";
  }};
  ${(props: TypographyProps) => {
    if (props.size === "md") {
      return `
          font-weight: 600;
          font-size: 20px;
          `;
    }
    if (props.size === "lg") {
      return `
          font-weight: 700;
          font-size: 35px;
          `;
    }
    if (props.gutterBottom) {
      return `
          margin-bottom: 1rem;
          `;
    }
  }}
`;
