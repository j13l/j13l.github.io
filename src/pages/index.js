import React from "react";
import { Header, Footer, Page } from "../layout";

import { OutboundLink } from "gatsby-plugin-google-analytics";

export default () => (
  <Page>
    <Header />
    <p>I build teams that build high-performing digital products.</p>
    <p>
      To avoid{" "}
      <OutboundLink
        href="http://cdixon.org/2009/09/19/climbing-the-wrong-hill/"
        target="_blank"
        rel="noopener noreferrer"
      >
        climbing the wrong hill
      </OutboundLink>{" "}
      <span role="img" aria-label="climber">
        {" "}
        🧗‍
      </span>
      , I've spent the past decade wearing many hats. I worked with React.js,
      Python & PHP, managed an awesome team of engineers, designed the UX of
      some small & ambitious startups, founded{" "}
      <OutboundLink
        href="https://hipwerk.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        hipwerk.com
      </OutboundLink>{" "}
      <span role="img" aria-label="rocket">
        {" "}
        🚀
      </span>{" "}
      and helped my favorite Swiss marketplace grow as a Product Manager.
      Writing software was probably the most fun of all.
    </p>
    <p>
      I also played professional basketball{" "}
      <span role="img" aria-label="basketball">
        🏀
      </span>{" "}
      for a short time, but that’s a different story.
    </p>
    <h2>Fast-forward to the present</h2>
    <p>
      I spend most of my waking hours leading the engineering team of{" "}
      <OutboundLink
        href="https://www.tutti.ch"
        target="_blank"
        rel="noopener noreferrer"
      >
        tutti.ch
      </OutboundLink>{" "}
      in lovely Zürich{" "}
      <span role="img" aria-label="Switzerland">
        🇨🇭
      </span>
      .
    </p>
    <Footer />
  </Page>
);
