import styled from "styled-components";

const SimpleButton = styled.button`
  background: none;
  border: none;

  &:focus {
    border: 0;
    outline: none;
    cursor: pointer;
  }
`;

export default SimpleButton;
