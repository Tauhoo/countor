import styled from 'styled-components'
import React, { Component } from 'react'
const Container = styled.div`
  position: absolute;
  background-color: #1abc9c;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`

const Clock = styled.span`
  position: absolute;
  top: 30vh;
  left: 25vw;
  font-size: 5.5rem;
  transform: translate(-50%,-50%);
  font-family: 'Montserrat';
`

const Text = styled.span`
  position: absolute;
  top: 50vh;
  left: 25vw;
  font-size: 2rem;
  transform: translate(-50%,-50%);
  font-family: 'Montserrat';
`

export default class extends Component {
  render () {
    return (
      <Container>
        <Clock>{'00.00'}</Clock>
        <Text>Yeah!!!</Text>
      </Container>
    )
  }
}
