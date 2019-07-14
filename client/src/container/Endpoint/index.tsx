import React, { useReducer } from 'react';
import { isValidJson, parseServerToClientEndpointList, parseClientToServer } from '../../util'


import { StyledHeader, StyledContainer, StyledAppWrapper } from '../../components/Util/Styled/containers'
import { StyledEndpointContainer, StyledFooter } from './style'

import EdpointList from '../../components/EndpointList'
import AddButton from '../../components/__StyledButton/Add'
import EndpointForm from '../../components/__Forms/Endpoint'
import ShowResponse from '../../components/Response'
import ResponseForm from '../../components/__Forms/Response'
import SearchBar from '../../components/Searchbar';
import EndpointDetails from '../../model/endpoint';
import Loader from '../../components/Loader'
import { MessageTemplate } from '../../components/Template'

//MOCK FILE
import { firstEndpointListMock } from '../../__mock__/endpointList'

interface IProps {
  endpointList: EndpointDetails[],
  match: {
    params: {
      id: string
    }
  }
}

interface IState {
  activeIndex: number,
  endpointArray: EndpointDetails[],
  endpointInput: EndpointDetails,
  updatedEndpoint: EndpointDetails,
  errMsg: string,
  onUpdateErrMsg: string,
  openForm: boolean,
  mode: string,
}

const Endpoint: React.FC<IProps> = ({ endpointList, match }) => {
  const defaultInput: EndpointDetails = {
    endpoint: '',
    status: 200,
    response: '',
    method: 'GET'
  }
  const initialState: IState = {
    activeIndex: -1,
    endpointArray: parseServerToClientEndpointList(firstEndpointListMock),
    endpointInput: defaultInput,
    updatedEndpoint: defaultInput,
    errMsg: '',
    onUpdateErrMsg: '',
    mode: 'none',
    openForm: false
  }

  function reducer(currentState: IState, state: {}) {
    console.log('currentState', JSON.stringify(currentState, null, 2))
    console.log('state', JSON.stringify(state, null, 2))
    return Object.assign({}, currentState, state)
  }

  const [state, setState] = useReducer(reducer, initialState)

  const {
    activeIndex,
    endpointArray,
    endpointInput,
    updatedEndpoint,
    errMsg,
    onUpdateErrMsg,
    mode,
    openForm
  } = state

  function addEndpoint() {
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
      const currentData = endpointArray.find((data: EndpointDetails, index: number) => (index === currentIndex))
      if (currentData !== undefined) {
        setState({
          activeIndex: currentIndex,
          updatedEndpoint: currentData,
          mode: 'none'
        })
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
    let value: string | number
    let key: string
    if (elType) {
      key = elType
      value = e.target.value
      setState({ endpointInput: { [key]: value } })
    }
  }

  function validateAndSave() {
    let newErrorMsg = ''
    if (endpointInput) {
      if (endpointInput.endpoint.trim().length > 0) {
        if (endpointInput.response.trim().length > 0) {
          if (isValidJson(endpointInput.response)) {
            console.log(parseClientToServer(endpointInput))//Dispatch Action SAVE
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
      setState({ errMsg: newErrorMsg })
    }
  }

  function handleUpdate(e: any, elType: string) {
    let value: string | number
    let key: string
    if (elType) {
      key = elType
      value = e.target.value
      setState({
        updatedEndpoint: { [key]: value }
      })
    }
  }

  function validateAndUpdate() {
    let newErrorMsg = ''
    if (updatedEndpoint) {
      if (updatedEndpoint.response.trim().length > 0) {
        if (isValidJson(updatedEndpoint.response)) {
          console.log(parseClientToServer(updatedEndpoint))//Dispatch Action Update
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
    if (activeIndex === index) {
      let data = endpointArray.find((data, idx) => (idx === activeIndex))
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
        errorMsg={errMsg}
        clearErrorMsg={(e: any) => setState({ errMsg: '' })}
      />
    } else {
      return null
    }
  }

  function renderEndpointLists() {
    if (endpointArray === undefined) {
      return <Loader />
    }
    else if (endpointArray !== undefined && endpointArray !== null && endpointArray.length > 0) {
      let endpointList = endpointArray.map((data, index) => (
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
      return endpointList
    }
    else {
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
          onClick={addEndpoint}
          active={openForm}
        />
      </StyledFooter>
      
    </StyledAppWrapper>
  )

}

export default Endpoint