import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const MATERIAL_UI_COLORS = [
  "#f44336",
  "#673ab7",
  "#03a9f4",
  "#4caf50",
  "#ffeb3b",
  "#ff5722",
]

const Header = ({ siteTitle }) => {
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
    <Wrapper>
      <Heading>
        <HomeLink
          to="/"
          underlinecolor={MATERIAL_UI_COLORS[rotatingColorIndex]}
        >
          {siteTitle}
        </HomeLink>
      </Heading>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  padding: 0 24px;
`

const Heading = styled.h2`
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 0;
`

const HomeLink = styled(Link).attrs(({ underlinecolor }) => ({
  style: {
    textDecoration: `underline ${underlinecolor}`,
  },
}))`
  font-size: 24px;
  color: #363636;
`

export default Header
