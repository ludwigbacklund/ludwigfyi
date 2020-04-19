import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const MATERIAL_UI_COLORS = [
  "#f44336",
  "#673ab7",
  "#03a9f4",
  "#4caf50",
  "#ffeb3b",
  "#ff5722",
]

const BlogPost = ({
  data: {
    markdownRemark: {
      frontmatter: { date, title, description },
      html,
    },
  },
}) => {
  const [rotatingColorIndex, setRotatingColorIndex] = useState(0)

  useEffect(() => {
    const updateRotatingColorInterval = setInterval(() => {
      setRotatingColorIndex(
        (rotatingColorIndex + 1) % MATERIAL_UI_COLORS.length
      )
    }, 2000)
    return () => clearInterval(updateRotatingColorInterval)
  })

  return (
    <>
      <SEO title={title} />
      <Layout>
        <Wrapper className="blog-post-container">
          <Date>{date}</Date>
          <Title>{title}</Title>
          <Content
            rotatingColor={MATERIAL_UI_COLORS[rotatingColorIndex]}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Wrapper>
      </Layout>
    </>
  )
}

const Wrapper = styled.div`
  max-width: 60ch;
`

const Date = styled.h2`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 800;
  margin: 0 0 8px 0;
`

const Title = styled.h1`
  margin: 0 0 0.67em 0;
`

const Content = styled.div`
  h3 {
    float: left;
    font-size: 18px;
    line-height: 1.5;
    margin: 0 8px 0 0;
  }

  p {
    line-height: 1.5;
  }

  a {
    /* text-decoration: underline ${({ rotatingColor }) => rotatingColor}; */
    /* text-decoration: none;
    border-bottom: 2px solid ${({ rotatingColor }) => rotatingColor}; */
    /* font-weight: 700; */
    color: #1565c0;
  }

  blockquote {
    border-left: 4px ${({ rotatingColor }) => rotatingColor} solid;
    margin-left: 0;
    padding-left: 1.333rem;
  }
`

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
      }
    }
  }
`

export default BlogPost
