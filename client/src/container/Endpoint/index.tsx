import React, { Component } from 'react';
import SearchBar from '../../components/Searchbar';
import EndpointDetails from '../../model/endpoint';

import { StyledHeader, StyledContainer, StyledAppWrapper } from '../../components/Util/Styled'

import {
  StyledEndpointContainer,
  StyledFooter
} from './style'

import EdpointList from '../../components/EndpointList'
import AddButton from '../../components/StyledButton/Add'
import EndpointForm from '../../components/Forms/Endpoint'
import { convertResponseToObj, parseEndpoint } from '../../util'
import { endpointList } from '../../__mock__/endpointList'


interface IProps {
  //endpointList?: EndpointDetails[],
  updateData: Function,
  deleteData: Function,
  addNewData: Function,
}

interface IState {
  openMenu: boolean,
  editMode: boolean,
  showResponse: boolean,
  openForm: boolean,

  activeIndex: number,
  activeButton: string,

  endpointInput: EndpointDetails,
  endpointArray: EndpointDetails[]
  errorMsg: string,

  updateEndpoint: EndpointDetails,
  onUpdateErrorMsg: string,
}

function getDefaultEndpoinInput() {
  return {
    endpoint: '',
    status: 200,
    response: '',
    method: 'GET'
  }
}

function getDefaultUpdatedInput() {
  return {
    endpoint: '',
    status: 0,
    response: '',
    method: ''
  }
}

function getActiveButton(prevButton: string, nextButton: string) {
  const SwitchList = ['EDIT', 'DELETE', 'SHOW', 'MENU'];
  let activeButton =
    prevButton.toUpperCase() !== nextButton.toUpperCase() &&
      SwitchList.indexOf(nextButton.toUpperCase()) >= 0 ? nextButton : 'none'
  return activeButton
}

class Endpoint extends Component<IProps, IState> {
  state: IState
  constructor(props: IProps) {
    super(props)
    this.state = {
      openMenu: false,
      editMode: false,
      showResponse: false,
      openForm: false,

      activeIndex: 0,
      activeButton: 'none',

      endpointArray: parseEndpoint(endpointList),

      endpointInput: {
        endpoint: '',
        status: 200,
        response: '',
        method: 'GET'
      },
      errorMsg: '',

      updateEndpoint: {
        endpoint: '',
        status: 0,
        response: '',
        method: ''
      },
      onUpdateErrorMsg: '',

    }
  }

  handleClick = (e: any, targetEl: string) => {
    const { activeButton } = this.state
    e.preventDefault()
    //Switch
    if (targetEl.toUpperCase() === 'SHOW') {
      this.setState({
        showResponse: !this.state.showResponse,
        activeButton: getActiveButton(activeButton, 'SHOW'),
        editMode: false
      })
    }
    else if (targetEl.toUpperCase() === 'EDIT') {
      this.editEndpoint()
    }
    else if (targetEl.toUpperCase() === 'DELETE') {
      this.setState({
        activeButton: getActiveButton(activeButton, 'DELETE')
      })
    }
    //Buttons
    else if (targetEl.toUpperCase() === 'ADD') {
      this.setState({
        openForm: !this.state.openForm,
        activeButton: getActiveButton(activeButton, 'ADD'),
      })
    }
    else if (targetEl.toUpperCase() === 'SAVE') {
      this.validateAndSave(this.state.endpointInput)
    }
    else if (targetEl.toUpperCase() === 'UPDATE') {
      this.validateAndUpdate(this.state.updateEndpoint)
    }
  }

  validateAndSave = (endpointInput: EndpointDetails) => {
    const { activeButton } = this.state
    if (endpointInput) {
      let newErrorMsg = ''
      if (endpointInput.endpoint.trim().length > 0) {
        if (endpointInput.response.trim().length > 0) {
          let responseObj = convertResponseToObj(endpointInput.response)
          if (responseObj.valid) {
            let newEndpointInput = {
              endpoint: endpointInput.endpoint,
              method: endpointInput.method,
              status: endpointInput.status,
              response: responseObj.response
            }
            console.log(newEndpointInput)//dispatch save
            this.setState({
              endpointInput: getDefaultEndpoinInput(),
              openForm: false,
              activeButton: getActiveButton(activeButton, 'SAVE'),
            })
          } else {
            newErrorMsg = responseObj.errorMsg
          }
        } else {
          newErrorMsg = 'invalid response'
        }
      } else {
        newErrorMsg = 'invalid url'
      }
      this.setState({
        errorMsg: newErrorMsg,
        activeButton: getActiveButton(activeButton, 'SAVE')
      })
    }
  }

  handleChange = (e: any, elType: string) => {
    let value = e.target.value
    let newEndpointInput = this.state.endpointInput
    if (elType) {
      switch (elType) {
        case 'endpoint':
          newEndpointInput.endpoint = value
          break
        case 'method':
          newEndpointInput.method = value
          break
        case 'response':
          newEndpointInput.response = value
          break
        case 'status':
          newEndpointInput.status = value
          break
      }
      this.setState({ endpointInput: newEndpointInput })
    }
  }

  toggleActiveIndex = (e: any, currentIndex: number) => {
    e.preventDefault()
    const { activeButton } = this.state
    if (this.state.activeIndex !== currentIndex) {
      this.setState({
        activeIndex: currentIndex,
        openMenu: true,
        activeButton: getActiveButton(activeButton, 'MENU')
      })
    } else {
      this.setState({
        openMenu: !this.state.openMenu,
        showResponse: false,
        editMode: false,
        activeButton: getActiveButton(activeButton, 'MENU')
      })
    }
  }

  editEndpoint = () => {
    const { activeButton } = this.state
    let defaultUpdateEndpointDetails = {
      endpoint: '',
      status: 0,
      response: '',
      method: ''
    }
    if (!this.state.editMode) {
      const { endpointArray, activeIndex } = this.state
      let newEndpointDetails = endpointArray.find((data, index) => (index === activeIndex))
      if (newEndpointDetails !== undefined)
        this.setState({
          editMode: true,
          showResponse: false,
          updateEndpoint: newEndpointDetails,
          activeButton: getActiveButton(activeButton, 'EDIT')
        })
    } else {
      this.setState({
        editMode: false,
        updateEndpoint: defaultUpdateEndpointDetails,
        activeButton: getActiveButton(activeButton, 'EDIT')
      })
    }

  }

  handleUpdate = (e: any, elType: string) => {
    let value = e.target.value
    let newUpdatedEndpointInput = this.state.updateEndpoint
    if (elType) {
      switch (elType) {
        case 'endpoint':
          newUpdatedEndpointInput.endpoint = value
          break
        case 'method':
          newUpdatedEndpointInput.method = value
          break
        case 'response':
          newUpdatedEndpointInput.response = value
          break
        case 'status':
          newUpdatedEndpointInput.status = value
          break
      }
      this.setState({
        updateEndpoint: newUpdatedEndpointInput,
      })
    }
  }

  validateAndUpdate = (endpointInput: EndpointDetails) => {
    const { activeButton } = this.state
    if (endpointInput) {
      let newErrorMsg = ''
      if (endpointInput.endpoint.trim().length > 0) {
        if (endpointInput.response.trim().length > 0) {
          let responseObj = convertResponseToObj(endpointInput.response)
          if (responseObj.valid) {
            let updatedEndpoint = {
              endpoint: endpointInput.endpoint,
              method: endpointInput.method,
              status: endpointInput.status,
              response: responseObj.response
            }
            console.log(updatedEndpoint)//dispatch update
            this.setState({
              updateEndpoint: getDefaultUpdatedInput(),
              editMode: false,
              activeButton: getActiveButton(activeButton, 'UPDATE')
            })
          } else {
            newErrorMsg = responseObj.errorMsg
          }
        } else {
          newErrorMsg = 'invalid response'
        }
      } else {
        newErrorMsg = 'invalid url'
      }
      this.setState({
        onUpdateErrorMsg: newErrorMsg,
        activeButton: getActiveButton(activeButton, 'UPDATE')
      })
    }
  }

  render() {
    const { openMenu, showResponse, editMode,
      activeIndex, updateEndpoint, onUpdateErrorMsg, activeButton } = this.state
    return (
      <StyledAppWrapper>
        <StyledHeader>
          <SearchBar />
        </StyledHeader>
        <StyledContainer>
          <StyledEndpointContainer>
            {
              this.state.endpointArray.map((data, index) => {
                return index === activeIndex ?
                  <EdpointList
                    endpointDetails={data}
                    index={index}
                    key={index}
                    openMenu={openMenu}
                    showResponse={showResponse}
                    editMode={editMode}
                    onClick={this.handleClick}
                    toggleActiveIndex={this.toggleActiveIndex}
                    updateEndpoint={updateEndpoint}
                    onChange={this.handleUpdate}
                    onUpdateErrorMsg={onUpdateErrorMsg}
                    activeButton={activeButton}
                  />
                  :
                  <EdpointList
                    endpointDetails={data}
                    index={index}
                    key={index}
                    openMenu={false}
                    showResponse={false}
                    editMode={false}
                    onClick={this.handleClick}
                    toggleActiveIndex={this.toggleActiveIndex}
                  />
              })
            }
            {
              this.state.openForm &&
              <EndpointForm
                inputparams={this.state.endpointInput}
                onChange={this.handleChange}
                onClick={this.handleClick}
                errorMsg={this.state.errorMsg}
              />
            }
          </StyledEndpointContainer>
        </StyledContainer>
        <StyledFooter>
          <AddButton
            float='right'
            onClick={this.handleClick}
            active={this.state.openForm}
          />
        </StyledFooter>
      </StyledAppWrapper>
    )
  }
}
export default Endpoint