import { combineReducers } from 'redux'

import EndpointReducer from './endpoint'
import ProjectReducer from './project'

export default combineReducers({
  endpointList: EndpointReducer,
  projectList: ProjectReducer
})

