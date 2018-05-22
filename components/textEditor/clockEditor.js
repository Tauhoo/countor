import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: inline-block;
  background-color: white;
  width: calc(49%);
  margin-left: 1%;
  height: 100%;
  border-radius: 1vh;
  overflow: hidden;
`

const Selector = styled.select`
  font-family: 'Montserrat';
  display: block;
  margin-left: 50%;
  margin-top: 1vh;
  width: calc(70%);
  transform: translateX(-50%);
  border-radius: 1vh;
  height: 30%;
  outline: none;
`

const Topic = styled.span`
  display: block;
  font-family: 'Montserrat';
  font-size: 1.1rem;
  margin-left: 50%;
  margin-top: 1vh;
  transform: translateX(-50%);
`

export default class extends Component {
  render() {
    return (
      <Container>
        <Topic>Clock font</Topic>
        <Selector>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </Selector>
      </Container>
    )
  }
}
