import React from "react";
import { Helmet } from "react-helmet";
import { Wrapper, Layout } from "../components/Wrapper";

export const Page = ({ children }) => (
  <Wrapper>
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        Adam Juras - Front-end Developer - Javascript, React.js & friends.{" "}
      </title>
      <meta
        name="description"
        content="Recovering ex-entrepreneur, aspiring future founder."
      />
      <link rel="canonical" href="https://adamjuras.com" />
    </Helmet>
    <Layout>{children}</Layout>
  </Wrapper>
);
