import React,{ Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 27vh;
  width: calc(100%-1vh);
  background-color: red;
  margin-left: 1vh;
  margin-right: 1vh;
  margin-bottom: 1vh;
  border-radius: 1vh;
  background: url('http://static.naewna.com/uploads/news/source/311848.jpg');
  background-size: cover;
  background-position: center;
`

export default class extends Component {
  render(){
    return (
      <Container>
      </Container>
    )
  }
}
