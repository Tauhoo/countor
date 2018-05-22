import React, { Component } from 'react'
import styled from 'styled-components'
import TextEffect from './textEffect'
import ClockEffect from './clockEffect'
import TextEditor from './textEditor'
import ClockEditor from './clockEditor'
const Container = styled.div`
  height: 69vh;
  width: 50vw;
  margin-left: 50vw;
  padding-top: 1vh;
`
const TopContainer = styled.div`
  height: 13vh;
  width: calc(100%-1vh);
  margin-bottom: 1vh;
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
