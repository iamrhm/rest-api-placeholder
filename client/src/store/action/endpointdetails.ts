import {
  GET_ENDPOINT_LISTS, GET_ENDPOINT_LISTS_ERROR,
  DELETE_ENDPOINT_ERROR, UPDATE_ENDPOINT_ERROR,
  ADD_ENDPOINT_ERROR
} from './action.types'
import { ClientEndpointDetails } from '../../model/endpoint'
import axios from 'axios'
import { parseClientToServer } from '../../util'

const baseURL = 'http://localhost:4000/api/core';

export const getEndpointLists = (projectname: string) => {
  return async function (dispatch: Function) {
    try {
      let response = await axios.get(`${baseURL}/getendpoints/${projectname}`)
      dispatch({
        type: GET_ENDPOINT_LISTS,
        payload: response.data,
        fetchError: { getEndpointList: false },
        errorMsg: ''
      })
    } catch (err) {
      dispatch({
        type: GET_ENDPOINT_LISTS_ERROR,
        fetchError: { getEndpointList: true },
        errorMsg: err.message
      })
    }
  }
}

export const addEndpoint = (projectname: string, endpointDetails: ClientEndpointDetails) => {
  return async function (dispatch: Function) {
    try {
      let parsedEndpointDetails = parseClientToServer(endpointDetails)
      await axios.post(`${baseURL}/addendpoint/${projectname}`, { ...parsedEndpointDetails })
      dispatch(getEndpointLists(projectname))
    } catch (err) {
      dispatch({
        type: ADD_ENDPOINT_ERROR,
        fetchError: { addEndpoint: true },
        errorMsg: err.message
      })
    }
  }
}

export const editEndpoint = (projectname: string, endpointDetails: ClientEndpointDetails) => {
  console.log(endpointDetails)
  return async function (dispatch: Function) {
    try {
      let parsedEndpointDetails = parseClientToServer(endpointDetails)
      await axios.put(`${baseURL}/editendpoint/${projectname}`, { ...parsedEndpointDetails })
      dispatch(getEndpointLists(projectname))
    } catch (err) {
      dispatch({
        type: UPDATE_ENDPOINT_ERROR,
        fetchError: { updateEndpoint: true },
        errorMsg: err.message
      })
    }
  }
}

export const deleteEndpoint = (projectname: string, endpoint: string) => {
  return async function (dispatch: Function) {
    try {
      await axios.delete(`${baseURL}/deleteendpoint/${projectname}`, 
      { data: { endpoint: endpoint } })
      dispatch(getEndpointLists(projectname))
    } catch (err) {
      dispatch({
        type: DELETE_ENDPOINT_ERROR,
        fetchError: { deleteEndpoint: true },
        errorMsg: err.message
      })
    }
  }
}