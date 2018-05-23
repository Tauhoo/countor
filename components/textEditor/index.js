import React, { Component } from 'react'
import styled from 'styled-components'
import TextEffect from './textEffect'
import ClockEffect from './clockEffect'
import TextEditor from './textEditor'
import ClockEditor from './clockEditor'
const Container = styled.div`
  height: 69vh;
  width: 25vw;
  transform: translateX(-100%);
  margin-left: 100vw;
  padding-top: 1vh;
`
const TopContainer = styled.div`
  margin-left: 1vh;
  margin-right: 1vh;
`
export default class extends Component {
  render () {
    return (
      <Container>
        <TopContainer>
          <TextEditor/>
          <ClockEditor/>
        </TopContainer>
        <TextEffect></TextEffect>
        <ClockEffect></ClockEffect>
      </Container>
    )
  }
}
