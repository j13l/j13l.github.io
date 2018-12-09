import React from "react";
import styled from "styled-components";

const UL = styled.ul`
  margin: 0;
`;

const LI = styled.li`
  display: inline-block;
  margin: 0.5rem 2rem 0 0;
`;

const references = [
  { title: "Hackernoon", link: "https://hackernoon.com/@jurasadam" },
  { title: "GitHub", link: "https://github.com/j13l" },
  { title: "Twitter", link: "https://mobile.twitter.com/jurasadam" }
];

export const Footer = () => {
  return (
    <>
      <strong>Find me on:</strong>
      <UL>
        {references.map(({ title, link }) => {
          return (
            <LI key={title}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </LI>
          );
        })}
      </UL>
    </>
  );
};
