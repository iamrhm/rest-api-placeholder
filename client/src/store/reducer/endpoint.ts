import {
  GET_ENDPOINT_LISTS, GET_ENDPOINT_LISTS_ERROR,
  DELETE_ENDPOINT_ERROR, UPDATE_ENDPOINT_ERROR,
  ADD_ENDPOINT_ERROR
} from '../action/action.types'
import { ServerEndpointDetails, ClientEndpointDetails } from '../../model/endpoint'
import { parseServerToClientEndpointList } from '../../util'

interface IProps {
  endpointList: ClientEndpointDetails[] | null;
  fetchError: {
    getEndpointList: boolean,
    addEndpoint: boolean,
    updateEndpoint: boolean,
    deleteEndpoint: boolean,
  };
  errorMsg: string;
}

interface IAction {
  type: typeof GET_ENDPOINT_LISTS |
  typeof GET_ENDPOINT_LISTS_ERROR |
  typeof DELETE_ENDPOINT_ERROR |
  typeof UPDATE_ENDPOINT_ERROR |
  typeof ADD_ENDPOINT_ERROR;

  payload: ServerEndpointDetails[]
  fetchError: {
    getEndpointList: boolean,
    addEndpoint: boolean,
    updateEndpoint: boolean,
    deleteEndpoint: boolean
  };
  errorMsg: string
}

const initialState: IProps = {
  endpointList: null,
  fetchError: {
    getEndpointList: false,
    addEndpoint: false,
    updateEndpoint: false,
    deleteEndpoint: false,
  },
  errorMsg: '',
}

export default (state = initialState, action: IAction) => {
  let { fetchError } = state
  switch (action.type) {
    case GET_ENDPOINT_LISTS:
      let parsedClientEndpoint = parseServerToClientEndpointList(action.payload)
      return Object.assign({}, state,
        {
          endpointList: [...parsedClientEndpoint],
          fetchError: Object.assign({}, fetchError, action.fetchError),
          errorMsg: ''
        })
    case GET_ENDPOINT_LISTS_ERROR:
      return Object.assign({}, state,
        {
          fetchError: Object.assign({}, fetchError, action.fetchError),
          errorMsg: action.errorMsg
        })
    case DELETE_ENDPOINT_ERROR:
      return Object.assign({}, state,
        {
          fetchError: Object.assign({}, fetchError, action.fetchError),
          errorMsg: action.errorMsg
        })
    case UPDATE_ENDPOINT_ERROR:
      return Object.assign({}, state,
        {
          fetchError: Object.assign({}, fetchError, action.fetchError),
          errorMsg: action.errorMsg
        })
    case ADD_ENDPOINT_ERROR:
      return Object.assign({}, state,
        {
          fetchError: Object.assign({}, fetchError, action.fetchError),
          errorMsg: action.errorMsg
        })
    default:
      return state
  }
} 