import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import { GlobalStyle } from './styled'

import Project from './container/Project'
import Endpoint from './container/Endpoint'

class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <GlobalStyle/>
        <BrowserRouter>
          <Route exact path='/' component={Project}/>
          <Route exact path='/:projectname' component={Endpoint}/>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App