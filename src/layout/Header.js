import React from "react";
import styled from "styled-components";
import Image from "../components/Image";

const Bio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 2rem 0;

  @media (max-width: 430px) {
    flex-direction: column;

    h1 {
      margin: 1rem 0 0;
      text-align: center;
    }
  }
`;
const Greeting = styled.h1`
  margin: 2rem 0 2rem 1rem;
`;
const Adam = styled(Image)`
  flex-shrink: 0;
`;

export const Header = () => (
  <Bio>
    <Adam />
    <Greeting>
      Hi, I'm Adam{" "}
      <span role="img" aria-label="wave">
        👋
      </span>
    </Greeting>
  </Bio>
);
