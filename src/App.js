import React, { Component, Fragment } from 'react';
import styled from 'styled-components'
import GlobalStyle from './styles/global';
import Main from './pages/Main'




const App = () => (
  <div className="App">
    <Fragment>
      <GlobalStyle/>
      <Main />
    </Fragment>
  </div>
)

export default App;
