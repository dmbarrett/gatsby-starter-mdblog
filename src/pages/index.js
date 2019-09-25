import React from "react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { css } from "@emotion/core"
import HomeLayout from "../components/homeLayout"
import Preview from "../components/preview"
import Img from "gatsby-image"

export default ({ data }) => {
  return (
    <HomeLayout>
      <div
        css={css`
          background-color: black;
          color: white;
          height: 100vh;
          max-width: 50vw;
        `}
      >
        <div
          css={css`
            padding: ${rhythm(2)};
            padding-top: ${rhythm(1.5)};
          `}
        >
          <h1
            css={css`
              color: inherit;
              margin-top: 0;
            `}
          >
            {data.site.siteMetadata.title}
          </h1>
          <h5
            css={css`
              color: slategray;
              max-width: 400px;
              margin-top: ${rhythm(0.5)};
            `}
          >
            {data.site.siteMetadata.description}
          </h5>
        </div>
        <h2
          css={css`
            color: white;
            padding-left: ${rhythm(2)};
          `}
        >
          What is markdown you say?
        </h2>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            padding: ${rhythm(2)};
            padding-top: ${rhythm(0.5)};
          `}
        >
          <div>
            <h5
              css={css`
                color: slategray;
                padding-right: ${rhythm(2)};
                margin-top: 0;
              `}
            >
              "Markdown is a text-to-HTML conversion tool for web writers.
              Markdown allows you to write using an easy-to-read, easy-to-write
              plain text format, then convert it to structurally valid XHTML or
              HTML." - <i>John Gruber</i>
              <br />
              <div
                css={css`
                  padding: ${rhythm(0.5)};
                  margin-top: ${rhythm(0.5)};
                  background-color: white;
                  border-radius: 10px;
                  display: inline-block;
                `}
              >
                <a
                  href="https://daringfireball.net/projects/markdown/"
                  target="_blank"
                  css={css`
                    text-shadow: none;
                  `}
                >
                  Learn more...
                </a>
              </div>
            </h5>
          </div>
          <div
            css={css`
              width: 200px;
            `}
          >
            <Img fixed={data.file.childImageSharp.fixed} />
          </div>
        </div>
        <div
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <h3
            css={css`
              color: slategray;
            `}
          >
            2019 -- Daniel Barrett
          </h3>
        </div>
      </div>
      <div
        css={css`
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
          max-width: 50vw;
        `}
      >
        <Link to="/blog">Blog</Link>
        <div>
          <Preview />
        </div>
      </div>
    </HomeLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    file(relativePath: { eq: "mark.png" }) {
      childImageSharp {
        fixed(width: 200, height: 123) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
