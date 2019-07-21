import React, { useReducer, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { isValidJson } from '../../util'

import { getEndpointLists, addEndpoint, editEndpoint, deleteEndpoint } from '../../store/action/endpointdetails'

import { StyledHeader, StyledContainer, StyledAppWrapper } from '../../components/Util/Styled/containers'
import { StyledEndpointContainer, StyledFooter } from './style'

import EdpointList from '../../components/EndpointList'
import AddButton from '../../components/__StyledButton/Add'
import EndpointForm from '../../components/__Forms/Endpoint'
import ShowResponse from '../../components/Response'
import ResponseForm from '../../components/__Forms/Response'
import SearchBar from '../../components/Searchbar';
import { ClientEndpointDetails } from '../../model/endpoint';
import AppPropType from '../../model/app.state';
import Loader from '../../components/Loader'
import { MessageTemplate } from '../../components/Template'

interface IProps {
  endpointList: ClientEndpointDetails[],
  match: {
    params: {
      id: string
    }
  }
}

interface IState {
  activeIndex: number,
  endpointInput: ClientEndpointDetails,
  updatedEndpoint: ClientEndpointDetails,
  vErrorMsg: string,
  onUpdateErrMsg: string,
  openForm: boolean,
  mode: string,
}

const Endpoint: React.FC<IProps> = ({ match }) => {
  const defaultInput: ClientEndpointDetails = {
    endpoint: '',
    status: 200,
    response: '',
    method: 'GET'
  }
  const initialState: IState = {
    activeIndex: -1,
    endpointInput: defaultInput,
    updatedEndpoint: defaultInput,
    vErrorMsg: '',
    onUpdateErrMsg: '',
    mode: 'none',
    openForm: false
  }

  function reducer(currentState: IState, state: {}) {
    return Object.assign({}, currentState, state)
  }
  const [state, setState] = useReducer(reducer, initialState)

  const { endpointList, fetchError, errorMsg } = useSelector((props: AppPropType) => props.endpointList)
  const dispatch = useDispatch()

  const projectName = match.params.id

  useEffect(() => {
    dispatch(getEndpointLists(projectName))
  }, [])

  const {
    activeIndex,
    endpointInput,
    updatedEndpoint,
    vErrorMsg,
    onUpdateErrMsg,
    mode,
    openForm
  } = state

  function toggleForm() {
    setState({
      openForm: !openForm,
      endpointInput: defaultInput
    })
  }

  function toggleActiveIndex(currentIndex: number) {
    if (activeIndex === currentIndex) {
      setState({
        activeIndex: -1,
        updatedEndpoint: defaultInput,
        mode: 'none'
      })
    }
    else {
      if (endpointList !== null) {
        const currentData = endpointList.find((data: ClientEndpointDetails, index: number) => (index === currentIndex))
        if (currentData !== undefined) {
          setState({
            activeIndex: currentIndex,
            updatedEndpoint: currentData,
            mode: 'none'
          })
        }
      }
    }
  }

  function toggleMode(currentMode: string) {
    if (mode === currentMode)
      setState({ mode: 'none' })
    else
      setState({ mode: currentMode })
  }

  function handleChange(e: any, elType: string) {
    let newEndpoint = endpointInput
    let value: string | number
    let key: string
    if (elType) {
      key = elType
      value = e.target.value
      setState({
        endpointInput: Object.assign({}, newEndpoint, { [key]: value })
      })
    }
  }

  function validateAndSave() {
    let newErrorMsg = ''
    if (endpointInput) {
      if (endpointInput.endpoint.trim().length > 0) {
        if (endpointInput.response.trim().length > 0) {
          if (isValidJson(endpointInput.response)) {
            dispatch(addEndpoint(projectName, endpointInput))
            setState({
              openForm: false,
              endpointInput: defaultInput
            })
          } else {
            newErrorMsg = 'Invalid JSON'
          }
        } else {
          newErrorMsg = 'Add response'
        }
      } else {
        newErrorMsg = 'Invalid endpoint'
      }
      setState({ vErrorMsg: newErrorMsg })
    }
  }

  function handleUpdate(e: any, elType: string) {
    let newUpdatedEndpoint = updatedEndpoint
    let value: string | number
    let key: string
    if (elType) {
      key = elType
      value = e.target.value
      setState({
        updatedEndpoint: Object.assign({}, newUpdatedEndpoint, { [key]: value })
      })
    }
  }

  function validateAndUpdate() {
    let newErrorMsg = ''
    if (updatedEndpoint) {
      if (updatedEndpoint.response.trim().length > 0) {
        if (isValidJson(updatedEndpoint.response)) {
          dispatch(editEndpoint(projectName, updatedEndpoint))
        } else {
          newErrorMsg = 'Invalid JSON'
        }
      } else {
        newErrorMsg = 'Add response'
      }
      setState({ onUpdateErrMsg: newErrorMsg })
    }
  }

  function renderConditionalResponseComponent(index: number) {
    if (activeIndex === index && endpointList !== null) {
      let data = endpointList.find((data, idx) => (idx === activeIndex))
      if (mode === 'show' && data !== undefined) {
        return <ShowResponse endpointDetails={data} />
      }
      else if (mode === 'edit' && data !== undefined) {
        return <ResponseForm
          inputparams={updatedEndpoint}
          onChange={handleUpdate}
          onClick={validateAndUpdate}
          errorMsg={onUpdateErrMsg}
          clearErrorMsg={(e: any) => setState({ onUpdateErrMsg: '' })}
        />
      }
      else
        return null
    }
    else
      return null
  }

  function renderConditionalEndpointInputComponent() {
    if (openForm) {
      return <EndpointForm
        inputparams={endpointInput}
        onChange={handleChange}
        onClick={validateAndSave}
        errorMsg={vErrorMsg}
        clearErrorMsg={(e: any) => setState({ vErrorMsg: '' })}
      />
    } else {
      return null
    }
  }

  function renderEndpointLists() {
    if (fetchError.getEndpointList)
      return (<MessageTemplate message={errorMsg} />)
    if (endpointList === undefined || endpointList === null) {
      return <Loader />
    }
    else if (endpointList !== null && endpointList.length > 0) {
      let endpointLists = endpointList.map((data, index) => (
        <EdpointList
          key={index}
          endpointDetails={data}
          index={index}
          activeState={activeIndex === index}
          toggleActiveIndex={toggleActiveIndex}
          toggleMode={toggleMode}
          mode={mode}
        >
          {renderConditionalResponseComponent(index)}
        </EdpointList>
      ))
      return endpointLists
    }
    else if (endpointList !== null && endpointList.length <= 0) {
      return (<MessageTemplate message='Add New Endpoint' />)
    }
  }

  return (
    <StyledAppWrapper>

      <StyledHeader>
        <SearchBar />
      </StyledHeader>

      <StyledContainer>
        <StyledEndpointContainer>
          {renderEndpointLists()}
          {renderConditionalEndpointInputComponent()}
        </StyledEndpointContainer>
      </StyledContainer>

      <StyledFooter>
        <AddButton
          float='right'
          onClick={toggleForm}
          active={openForm}
        />
      </StyledFooter>

    </StyledAppWrapper>
  )

}

export default Endpoint