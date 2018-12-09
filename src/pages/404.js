import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Page } from "../layout";
import { colorPrimary } from "../utils/typography";

const Title = styled.h2`
  color: ${colorPrimary};
  font-size: 4rem;
`;

export default () => (
  <Page>
    <Title>4, oh 4</Title>
    <p>
      What? This can't be right. Can you please do me a favour and click the
      button below?
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Page>
);
