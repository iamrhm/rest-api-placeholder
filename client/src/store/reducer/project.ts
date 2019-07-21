import {
  GET_PROJECTNAMES, GET_PROJECTNAMES_ERROR,
  DELETE_PROJECT_ERROR, ADD_PROJECT_ERROR
} from '../action/action.types'

interface IProps {
  projectNames: [{name: string}] | null;
  fetchError: {
    getproject: boolean,
    deleteproject: boolean,
    addproject: boolean,
  };
  errorMsg: string;
}

interface IAction {
  type: typeof GET_PROJECTNAMES |
  typeof GET_PROJECTNAMES_ERROR |
  typeof DELETE_PROJECT_ERROR |
  typeof ADD_PROJECT_ERROR;

  payload: string[];
  fetchError: {
    getproject?: boolean,
    deleteproject?: boolean,
    addproject?: boolean,
  };
  errorMsg: string;
}

const initialState: IProps = {
  projectNames: null,
  fetchError: {
    getproject: false,
    deleteproject: false,
    addproject: false
  },
  errorMsg: ''
}

export default function (state = initialState, action: IAction) {
  let fetchError = { state }
  switch (action.type) {
    case GET_PROJECTNAMES:
      return Object.assign({}, state,
        {
          projectNames: [...action.payload],
          fetchError: Object.assign({}, fetchError, action.fetchError),
          errorMsg: ''
        })
    case GET_PROJECTNAMES_ERROR:
      return Object.assign({}, state,
        {
          fetchError: Object.assign({}, fetchError, action.fetchError),
          errorMsg: action.errorMsg
        })
    case DELETE_PROJECT_ERROR:
      return Object.assign({}, state,
        {
          fetchError: Object.assign({}, fetchError, action.fetchError),
          errorMsg: action.errorMsg
        })
    case ADD_PROJECT_ERROR:
      return Object.assign({}, state,
        {
          fetchError: Object.assign({}, fetchError, action.fetchError),
          errorMsg: action.errorMsg
        })
    default:
      return state
  }
} 