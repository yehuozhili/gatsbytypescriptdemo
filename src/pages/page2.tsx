import React from "react"
import styled from "styled-components"
import { Link, navigate } from "gatsby"
import { useStaticQuery, graphql } from "gatsby" // to query for image data
import Img from "gatsby-image" // to take image data and render it

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

function App() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "test.jpg" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `)

  return (
    <div>
      page2
      <Link to="/">page1</Link>
      <button onClick={() => navigate("/")}>page1</button>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="A corgi smiling happily"
      />
    </div>
  )
}

export default () => (
  <Wrapper>
    <App></App>
  </Wrapper>
)
