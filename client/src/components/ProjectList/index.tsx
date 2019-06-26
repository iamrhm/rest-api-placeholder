import React from 'react';

import { StyledList, StyledHeader, StyledPara } from "./styled";

interface IProps {
  projectName: string,
  handleClick?: Function,
}

const ProjectList: React.FC<IProps> = ({ projectName }) => (
  <StyledList>
    <StyledHeader>
      {projectName}
    </StyledHeader>
    <StyledPara>
      Base URL : <br />
      <StyledPara>`http://localhost:${window.location.port}/api/${projectName}/mock`</StyledPara>
    </StyledPara>
  </StyledList>
)

export default ProjectList