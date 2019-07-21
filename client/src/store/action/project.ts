import {
  GET_PROJECTNAMES, GET_PROJECTNAMES_ERROR,
  DELETE_PROJECT_ERROR, ADD_PROJECT_ERROR
} from './action.types'

import axios from 'axios'

const baseURL = 'http://localhost:4000/api/core'

export const getProjectNames = () => {
  return async function (dispatch: Function) {
    try {
      let response = await axios.get(`${baseURL}/getprojectnames`)
      let projectNames = response.data
      dispatch({
        type: GET_PROJECTNAMES,
        payload: projectNames,
        fetchError: { getproject: false },
        errorMsg: ''
      })
    } catch (error) {
      dispatch({
        type: GET_PROJECTNAMES_ERROR,
        fetchError: { getproject: true },
        errorMsg: error.message
      })
    }
  }
}

export const deleteProject = (projectname: string) => {
  return async function (dispatch: Function) {
    try {
      await axios.delete(`${baseURL}/deleteproject`, { data: { projectname: projectname } })
      dispatch(getProjectNames())
    } catch (error) {
      dispatch({
        type: DELETE_PROJECT_ERROR,
        fetchError: { deleteproject: true },
        errorMsg: error.message
      })
    }
  }
}

export const addProject = (projectname: string) => {
  return async function (dispatch: Function) {
    try {
      await axios.post(`${baseURL}/addnewproject`, { projectname: projectname })
      dispatch(getProjectNames())
    } catch (error) {
      dispatch({
        type: ADD_PROJECT_ERROR,
        fetchError: { addproject: true },
        errorMsg: error.message
      })
    }
  }
}