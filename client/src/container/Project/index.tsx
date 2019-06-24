import React, { Component } from 'react';
import SearchBar from '../../components/Searchbar';

import { StyledHeader, StyledContainer, StyledAppWrapper } from '../../components/Util/Styled'
import {
  StyledListContainer,
  StyledFooter,
} from './style'

import ProjectList from '../../components/ProjectList'
import AddButton from '../../components/StyledButton/Add'

interface IProps {
  projectNames?: string[],
  getProjectName: Function,
  deleteProject: Function
}

class Project extends Component {

  handleClick = () => {

  }
  render() {
    return (
      <StyledAppWrapper>
        <StyledHeader>
          <SearchBar />
        </StyledHeader>
        <StyledContainer>
          <StyledListContainer>

            <ProjectList />
            <ProjectList />
            <ProjectList />

            <StyledFooter>
              {/* <AddButton float='right' onClick={this.handleClick} /> */}
            </StyledFooter>

          </StyledListContainer>
        </StyledContainer>
      </StyledAppWrapper>
    )
  }
}
export default Project