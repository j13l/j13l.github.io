import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Wrapper = styled.div`
  margin: 3rem auto;
  max-width: 680px;
`;

const Layout = styled.div`
  padding: 0 2rem;
`;

export default () => (
  <Wrapper>
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        Adam Juras - Front-end Developer - Javascript, React.js & friends.{" "}
      </title>
      <link rel="canonical" href="https://adamjuras.com" />
    </Helmet>
    <Layout>
      <Header />
      <p>I build delightful digital products for a living - and for fun.</p>
      <p>
        To avoid{" "}
        <a
          href="http://cdixon.org/2009/09/19/climbing-the-wrong-hill/"
          target="_blank"
          rel="noopener noreferrer"
        >
          climbing the wrong hill
        </a>
        , I've spent the past decade wearing many hats{" "}
        <span role="img" aria-label="tophat">
          {" "}
          🎩
        </span>
        . My "Greatest Hits" album includes me as a Software Developer,
        Engineering Manager, Product Manager, UX Designer. One (intense) song
        would be about the time we've founded{" "}
        <a href="https://hipwerk.com" target="_blank" rel="noopener noreferrer">
          hipwerk
        </a>{" "}
        and launched startup after startup. 🚀
      </p>
      <p>
        I also played professional{" "}
        <span role="img" aria-label="basketball">
          🏀
        </span>
        basketball for a short time, but that’s a different story.
        <br />
        <br />
        Each role shaped me in a different way.
      </p>
      <h2>What now?</h2>
      <p>
        Drawing a perfect circle, I'm back to dev and enjoying it a lot. I
        currently work as a{" "}
        <span role="img" aria-label="atom">
          ⚛️
        </span>
        React.js developer at{" "}
        <a
          href="https://www.tutti.ch"
          target="_blank"
          rel="noopener noreferrer"
        >
          tutti.ch
        </a>{" "}
        in lovely{" "}
        <span role="img" aria-label="Switzerland">
          🇨🇭
        </span>
        Zürich.
      </p>
      <Footer />
    </Layout>
  </Wrapper>
);
