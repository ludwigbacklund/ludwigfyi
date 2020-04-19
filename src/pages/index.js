import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import linkedIn from "../images/linkedin.svg"
import github from "../images/github.svg"

const IndexPage = ({
  data: {
    allMarkdownRemark: { posts },
  },
}) => (
  <IndexLayout>
    <LeftSection>
      <Heading>Ludwig Bäcklund</Heading>
      <SocialLink href="https://www.linkedin.com/in/ludwigbacklund/">
        <SocialIcon width={24} height={24} alt="LinkedIn logo" src={linkedIn} />
      </SocialLink>
      <SocialLink href="https://github.com/ludwigbacklund">
        <SocialIcon width={24} height={24} alt="Github logo" src={github} />
      </SocialLink>
    </LeftSection>

    <RightSection>
      {posts.map(
        ({
          node: {
            frontmatter: { path, title, date, description },
          },
        }) => (
          <Post key={title}>
            <PostDate>{date}</PostDate>
            <PostLink to={path}>
              <PostHeading>{title}</PostHeading>
              <PostDescription>{description}</PostDescription>
            </PostLink>
          </Post>
        )
      )}
    </RightSection>
  </IndexLayout>
)

const IndexLayout = styled(Layout)`
  display: flex;
`

const Heading = styled.h1`
  font-size: 24px;
  margin-top: 0;
`

const SocialLink = styled.a`
  display: inline-block;
  margin-right: 8px;
`

const SocialIcon = styled.img`
  margin: 0;
`

const LeftSection = styled.div`
  width: 30%;
`

const RightSection = styled.div`
  width: 70%;
  margin-left: 16px;

  @media (min-width: 768px) {
    margin-left: 0;
  }
`

const Post = styled.div`
  display: flex;
  flex-direction: column;
`

const PostLink = styled(Link)`
  text-decoration: none;
  color: hsla(0, 0%, 0%, 0.8);
`

const PostDate = styled.span`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 800;
`

const PostHeading = styled.h2`
  margin: 8px 0 0 0;
`

const PostDescription = styled.p`
  margin-top: 16px;
  line-height: 1.4em;
`

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      posts: edges {
        node {
          frontmatter {
            title
            path
            description
            date(formatString: "MMMM YYYY")
          }
        }
      }
    }
  }
`

export default IndexPage
