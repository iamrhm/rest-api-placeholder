import React from 'react';

import { StyledList, StyledHeader, StyledPara, StyledUrl, StyledButtonWrapper } from "./styled";
import { StyledLinkIcon } from '../Util/Styled/icon'
import DeleteButton from '../__StyledButton/Delete'
import GoButton from '../__StyledButton/Go'
interface IProps {
  projectName: string,
  navigateTo: Function,
  deleteProject: Function
}

const ProjectList: React.FC<IProps> = ({ projectName, navigateTo, deleteProject }) => {
  function getUrl() {
    return (
      <StyledUrl>
        {`http://localhost:${window.location.port}/api/`}
        <strong style={{ color: '' }}>{projectName}</strong>
        {`/mock`}
      </StyledUrl>
    )
  }
  return (
    <StyledList >
      <StyledHeader>
        {projectName}
      </StyledHeader>
      <StyledPara>
        <StyledLinkIcon />
        {getUrl()}
        <StyledButtonWrapper>
          <GoButton onClick={(e: any) => navigateTo(projectName)} />
          <DeleteButton onClick={(e: any) => deleteProject(projectName)} />
        </StyledButtonWrapper>
      </StyledPara>
    </StyledList>
  )
}

export default ProjectList