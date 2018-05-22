import React,{ Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 27vh;
  width: calc(100%-1vh);
  background: url('https://i.ytimg.com/vi/12AalCGTMHk/maxresdefault.jpg');
  background-size: cover;
  background-position: center;
  margin-left: 1vh;
  margin-right: 1vh;
  margin-bottom: 1vh;
  border-radius: 1vh;
`

export default class extends Component {
  render(){
    return (
      <Container>

      </Container>
    )
  }
}
