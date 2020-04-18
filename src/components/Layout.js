import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "normalize.css"

import Header from "./Header"

const Layout = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Wrapper>
        <Main className={className}>{children}</Main>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 0 24px;
`

const Main = styled.main`
  max-width: 960px;
  margin: 0 auto;
`

export default Layout
