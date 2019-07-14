import React from 'react';

import { StyledList, StyledHeader, StyledPara, StyledUrl } from "./styled";
import { StyledLinkIcon } from '../Util/Styled/icon'

interface IProps {
  projectName: string,
  onClick: Function,
}

const ProjectList: React.FC<IProps> = ({ projectName , onClick}) => {
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
    <StyledList onClick={(e) => onClick(projectName)}>
      <StyledHeader>
        {projectName}
      </StyledHeader>
      <StyledPara>
        <StyledLinkIcon />
        {getUrl()}
      </StyledPara>
    </StyledList>
  )
}

export default ProjectList