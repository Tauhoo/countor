import styled from 'styled-components'
import React, { Component } from 'react'

const Container = styled.div`
  position: absolute;
  width: 100vw;
  overflow: hidden;
`

const Views = styled.div`
  width: 406vh;
`

const View = styled.div`
  display: inline-block;
  height: 28vh;
  width: 28vh;
  margin-left: 1vh;
  margin-top: 1vh;
  background: url('https://thumbs.dreamstime.com/b/urban-landscape-background-flat-design-cityscape-big-city-illustration-sunny-multicoloured-buildings-trees-green-grass-57417138.jpg');
  background-size: cover;
  border-radius: 2vh;
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
          <View/>
          <View/>
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
