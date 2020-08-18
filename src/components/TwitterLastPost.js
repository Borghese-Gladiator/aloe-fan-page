import React from 'react'
import Container from '@material-ui/core/Container'

export default function TwitterLastPost() {
  const backgroundStyling = {
    backgroundColor: "white"
  }

  return (
    <Container style={backgroundStyling}>
      <h1>Latest from Twitter</h1>
    </Container>
  )
}