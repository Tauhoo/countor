import styled from 'styled-components'
import React, { Component } from 'react'
import Input from 'react-simple-timefield'
const Container = styled.div`
  position: absolute;
  background-color: #1abc9c;
  width: 100vw;
  height: 100vh;
  z-index: 0;
`

const Clock = styled.div`
  position: absolute;
  top: 30vh;
  left: calc(75vw/2);
  transform: translate(-50%,-50%);
`

const Text = styled.input`
  position: absolute;
  top: 50vh;
  left: calc(75vw/2);
  font-size: 2rem;
  transform: translate(-50%,-50%);
  font-family: 'Montserrat';
  text-align: center;
  border: none;
  outline: none;
  background: none;
  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: black;
  }
`

const inputStyle = {
  fontSize: '5.5rem',
  fontFamily: 'Montserrat',
  width: '31.5vw',
  border: 'none',
  outline: 'none',
  background: 'none'
}

export default class extends Component {
  render () {
    return (
      <Container>
        <Clock>
          <Input
            value={'00:00'}
            onChange={(value) => {return}}
            style={inputStyle}
          />
        </Clock>
        <Text type='text' placeholder='Yeah!!!'></Text>
      </Container>
    )
  }
}
