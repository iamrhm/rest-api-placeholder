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
  newProject: {
    name: string,
  }
}
function defaultNewProject() {
  return {
    name: '',
  }
}
class Project extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props)
    this.state = {
      projectNames: ['Project One', 'Project Two', 'Project Three'],
      openForm: false,
      newProject: {
        name: ''
      }
    }
  }

  handleClick = (e: any, targetEl: string) => {
    if (targetEl.toUpperCase() === 'ADD') {
      if (this.state.openForm) {
        this.setState({
          openForm: false,
          newProject: defaultNewProject()
        })
      } else {
        this.setState({
          openForm: true,
          newProject: defaultNewProject()
        })
      }
    }
  }
  handleChange = (e: any, targetEl: string) => {
    let value=e.target.value;
    if(value!==undefined){
      this.setState({
        newProject:{
          name:value,
        }
      })
    }
  }

  render() {
    const { projectNames, openForm, newProject } = this.state
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
                projectInput={newProject}
                onChange={this.handleChange} />
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