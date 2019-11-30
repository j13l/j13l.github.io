import React from "react";
import { Header, Footer, Page } from "../layout";

import { OutboundLink } from "gatsby-plugin-google-analytics";

export default () => (
  <Page>
    <Header />
    <p>I build delightful digital products for a living - and for fun.</p>
    <p>
      To avoid{" "}
      <span role="img" aria-label="climber">
        {" "}
        🧗‍
      </span>{" "}
      <OutboundLink
        href="http://cdixon.org/2009/09/19/climbing-the-wrong-hill/"
        target="_blank"
        rel="noopener noreferrer"
      >
        climbing the wrong hill
      </OutboundLink>
      , I spent the past decade wearing many hats. I contributed to many digital
      products writing software in Javascript, Python & PHP, managed an awesome
      team of engineers, designed the UI of some small (but ambitious!) startups
      ,
      <span role="img" aria-label="rocket">
        {" "}
        🚀
      </span>{" "}
      founded{" "}
      <OutboundLink
        href="https://hipwerk.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        hipwerk.com
      </OutboundLink>{" "}
      and helped my favorite Swiss marketplace grow as a Product Manager.
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
      I spend most of my waking hours as CTO of{" "}
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
