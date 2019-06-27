import React, { Component } from 'react';
import SearchBar from '../../components/Searchbar';

import { StyledHeader, StyledContainer, StyledAppWrapper } from '../../components/Util/Styled'
import {
  StyledListContainer,
  StyledFooter,
} from './style'

import ProjectList from '../../components/ProjectList'
import ProjectForm from '../../components/Forms/Project'
import AddButton from '../../components/StyledButton/Add'

interface IProps {
  projectNames?: string[],
  getProjectName: Function,
  deleteProject: Function
}

interface IState {
  projectNames: string[],
  openForm: boolean,
  projectName: string,
  errorMsg: string
}

class Project extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props)
    this.state = {
      projectNames: ['Project One', 'Project Two', 'Project Three'],
      openForm: false,
      projectName: '',
      errorMsg: ''
    }
  }

  handleClick = (e: any, targetEl: string) => {
    if (targetEl.toUpperCase() === 'ADD') {
      if (this.state.openForm) {
        this.setState({
          openForm: false,
          projectName: ''
        })
      } else {
        this.setState({
          openForm: true,
          projectName: ''
        })
      }
    }
    else if (targetEl.toUpperCase() === 'SAVE') {
      this.validateAndSave()
    }
  }

  handleChange = (e: any, targetEl: string) => {
    let value = e.target.value;
    if (value !== undefined) {
      this.setState({
        projectName: value
      })
    }
  }

  validateAndSave = () => {
    const { projectName } = this.state
    if (projectName !== undefined && projectName !== '') {
      console.log(projectName) //dispatch save project
      this.setState({
        openForm:false
      })
    } else {
      this.setState({
        errorMsg: 'invalid input'
      })
    }
  }

  render() {
    const { projectNames, openForm, projectName, errorMsg } = this.state
    return (
      <StyledAppWrapper>
        <StyledHeader>
          <SearchBar />
        </StyledHeader>
        <StyledContainer>
          <StyledListContainer>
            {
              projectNames.map((projectName) => (
                <ProjectList projectName={projectName} />
              ))
            }
            {
              openForm &&
              <ProjectForm
                projectName={projectName}
                onChange={this.handleChange}
                onClick={this.handleClick}
                errorMsg={errorMsg} />
            }
            <StyledFooter>
              <AddButton
                float='right'
                active={openForm}
                onClick={this.handleClick} />
            </StyledFooter>
          </StyledListContainer>
        </StyledContainer>
      </StyledAppWrapper>
    )
  }
}
export default Project