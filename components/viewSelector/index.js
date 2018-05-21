import styled from 'styled-components'
import React, { Component } from 'react'

const Container = styled.div`
  position: absolute;
`

const Views = styled.div`
  background-color: green;
  width: 150vw;
`

const View = styled.div`
  display: inline-block;
  height: 28vh;
  width: 28vh;
  margin-left: 1vh;
  margin-top: 1vh;
  background-color: black;
`

export default class extends Component {
  render () {
    return (
      <Container>
        <Views>
          <View/>
          <View/>
          <View/>
          <View/>
          <View/>
          <View/>
        </Views>
      </Container>
    )
  }
}
