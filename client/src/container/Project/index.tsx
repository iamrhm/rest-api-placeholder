import React, { useReducer, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import AppPropType from '../../model/app.state';
import { getProjectNames, deleteProject, addProject } from '../../store/action/project'

import { StyledHeader, StyledContainer, StyledAppWrapper } from '../../components/Util/Styled/containers'
import { StyledListContainer, StyledFooter } from './style'

import SearchBar from '../../components/Searchbar';
import ProjectList from '../../components/ProjectList'
import ProjectForm from '../../components/__Forms/Project'
import AddButton from '../../components/__StyledButton/Add'
import Loader from '../../components/Loader'
import { MessageTemplate } from '../../components/Template'

interface IProps {
  history: {
    push: Function
  }
}
interface IState {
  openForm: boolean,
  projectName: string,
  vErrorMsg: string
}

const Project: React.FC<IProps> = ({ history }) => {
  const defaultState: IState = {
    openForm: false,
    projectName: '',
    vErrorMsg: ''
  }

  function reducer(currentState: IState, state: {}) {
    return Object.assign({}, currentState, state)
  }
  const [state, setState] = useReducer(reducer, defaultState)

  const { projectNames, fetchError, errorMsg } = useSelector((props: AppPropType) => props.projectList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProjectNames())
  }, [])
  const { openForm, projectName, vErrorMsg } = state

  function toggleForm() {
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
      dispatch(addProject(projectName))
      setState({
        openForm: false,
        vErrorMsg: ''
      })
    } else {
      setState({
        vErrorMsg: 'invalid input'
      })
    }
  }

  function clearErrorMsg() {
    setState({ vErrorMsg: '' })
  }

  function handleNavigation(projectName: string) {
    history.push(`/endpoint/${projectName}`)
  }

  function handleDeleteProject(projectName: string) {
    if (projectName)
      dispatch(deleteProject(projectName))
  }

  function renderEndpointForm() {
    if (openForm) {
      return (
        <ProjectForm
          projectName={projectName}
          onChange={handleChange}
          onClick={validateAndSave}
          errorMsg={vErrorMsg}
          clearErrorMsg={clearErrorMsg} />
      )
    } else {
      return null
    }
  }

  function renderProjectList() {
    if (fetchError.getproject) {
      return (<MessageTemplate message={errorMsg} />)
    }
    else {
      if (projectNames === null)
        return <Loader />
      else if (projectNames !== null && projectNames.length > 0)
        return (
          projectNames.map(({ name }, index) => (
            <ProjectList
              key={index}
              projectName={name}
              navigateTo={handleNavigation}
              deleteProject={handleDeleteProject}
            />
          ))
        )
      else if (projectNames !== null && projectNames.length <= 0)
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
              onClick={toggleForm} />
          </StyledFooter>
        </StyledListContainer>
      </StyledContainer>
    </StyledAppWrapper>
  )
}

export default Project