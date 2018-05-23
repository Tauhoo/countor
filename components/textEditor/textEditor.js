import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: inline-block;
  margin-right: 1%;
  width: calc(49%);
  height: 100%;
  border-radius: 1vh;
  overflow: hidden;
`

const Selector = styled.select`
  font-family: 'Montserrat';
  display: block;
  margin-left: 50%;
  margin-top: 3vh;
  width: 100%;
  transform: translate(-50%,-50%);
  border-radius: 1vh;
  height: 4vh;
  outline: none;
  border: 0px;
  background-color: white;
`

export default class extends Component {
  render() {
    return (
      <Container>
        <Selector>
          <option>text font</option>
          <option>text font</option>
          <option>text font</option>
          <option>text font</option>
        </Selector>
      </Container>
    )
  }
}
