import React, { Component } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Display from '../components/display/index'
import TextEditor from '../components/textEditor/index'
import ViewSelector from '../components/viewSelector/index'

export default class extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Countor</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <style>{'body {margin: 0px; overflow: hidden;} html {font-size: 2vw;}'}</style>
        <body>
          <Display/>
          <TextEditor/>
          <ViewSelector/>
        </body>
      </div>
    )
  }
}
