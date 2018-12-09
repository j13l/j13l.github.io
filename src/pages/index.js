import React from "react";
import { Header, Footer, Page } from "../layout";

import { OutboundLink } from "gatsby-plugin-google-analytics";

export default () => (
  <Page>
    <Header />
    <p>I build delightful digital products for a living - and for fun.</p>
    <p>
      To avoid{" "}
      <OutboundLink
        href="http://cdixon.org/2009/09/19/climbing-the-wrong-hill/"
        target="_blank"
        rel="noopener noreferrer"
      >
        climbing the wrong hill
      </OutboundLink>
      , I've spent the past decade wearing many hats{" "}
      <span role="img" aria-label="tophat">
        {" "}
        🎩
      </span>
      . My "Greatest Hits" album includes me as a Software Developer,
      Engineering Manager, Product Manager, UX Designer. One (intense) song
      would be about the time we've founded{" "}
      <OutboundLink
        href="https://hipwerk.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        hipwerk
      </OutboundLink>{" "}
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
    <h2>What next?</h2>
    <p>
      Drawing a perfect circle, I'm back to dev and enjoying it a lot. I
      currently work as a{" "}
      <span role="img" aria-label="atom">
        ⚛️
      </span>
      React.js developer at{" "}
      <OutboundLink
        href="https://www.tutti.ch"
        target="_blank"
        rel="noopener noreferrer"
      >
        tutti.ch
      </OutboundLink>{" "}
      in lovely{" "}
      <span role="img" aria-label="Switzerland">
        🇨🇭
      </span>
      Zürich.
    </p>
    <Footer />
  </Page>
);
