import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyle } from './styled'

import Project from './container/Project'
import Endpoint from './container/Endpoint'
import { Provider } from 'react-redux';
import store from './store'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment >
          <GlobalStyle />
          <BrowserRouter>
            <Route exact path='/' component={Project} />
            <Route path='/endpoint/:id' component={Endpoint} />
          </BrowserRouter>
        </React.Fragment>
      </Provider>
    )
  }
}

export default App