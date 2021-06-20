import React, { useReducer } from 'react';


import { StyledHeader, StyledContainer, StyledAppWrapper } from '../../components/Util/Styled/containers'
import { StyledListContainer, StyledFooter } from './style'

import SearchBar from '../../components/Searchbar';
import ProjectList from '../../components/ProjectList'
import ProjectForm from '../../components/__Forms/Project'
import AddButton from '../../components/__StyledButton/Add'
import Loader from '../../components/Loader'
import { MessageTemplate } from '../../components/Template'

interface IProps {
  propsProjectNames?: string[],
  getProjectName?: Function,
  deleteProject?: Function,
  history: {
    push: Function
  }
}

interface IState {
  projectNames: string[] | undefined,
  openForm: boolean,
  projectName: string,
  errorMsg: string
}


const Project: React.FC<IProps> = ({ propsProjectNames = {}, history }) => {
  const defaultState: IState = {
    projectNames: [],
    openForm: false,
    projectName: '',
    errorMsg: ''
  }

  function reducer(currentState: IState, state: {}) {
    return Object.assign({}, currentState, state)
  }
  const [state, setState] = useReducer(reducer, defaultState)
  const { projectNames, openForm, projectName, errorMsg } = state

  function addProject() {
    if (openForm) {
      setState({
        openForm: false,
        projectName: ''
      })
    } else {
      setState({
        openForm: true,
        projectName: ''
      })
    }
  }

  function handleChange(e: any) {
    let value = e.target.value;
    if (value !== undefined) {
      setState({
        projectName: value
      })
    }
  }
  function validateAndSave() {
    if (projectName !== undefined && projectName !== '') {
      console.log(projectName) //dispatch save project
      setState({
        openForm: false,
        errorMsg: ''
      })
    } else {
      setState({
        errorMsg: 'invalid input'
      })
    }
  }

  function clearErrorMsg() {
    setState({
      errorMsg: ''
    })
  }

  function handleNavigation(projectName: string) {
    console.log(projectName)
    history.push(`/endpoint/${projectName}`)
  }

  function renderEndpointForm() {
    if (openForm) {
      return (
        <ProjectForm
          projectName={projectName}
          onChange={handleChange}
          onClick={validateAndSave}
          errorMsg={errorMsg}
          clearErrorMsg={clearErrorMsg} />
      )
    } else {
      return null
    }
  }

  function renderProjectList() {
    if (projectNames === undefined) {
      return <Loader />
    }
    if (projectNames !== undefined && projectNames !== null && projectNames.length > 0)
      return (
        projectNames.map((projectName, index) => (
          <ProjectList
            key={index}
            projectName={projectName}
            onClick={handleNavigation}
          />
        ))
      )
    else {
      return (<MessageTemplate message='Add New Project' />)
    }
  }

  return (
    <StyledAppWrapper>
      <StyledHeader>
        <SearchBar />
      </StyledHeader>
      <StyledContainer>
        <StyledListContainer>
          {renderProjectList()}
          {renderEndpointForm()}
          <StyledFooter>
            <AddButton
              float='right'
              active={openForm}
              onClick={addProject} />
          </StyledFooter>
        </StyledListContainer>
      </StyledContainer>
    </StyledAppWrapper>
  )
}

export default Project