import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "adam.png" }) {
          childImageSharp {
            fixed(width: 100, height: 100, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.file.childImageSharp.fixed} {...props} />}
  />
);
export default Image;
