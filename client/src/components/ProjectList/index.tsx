import React from 'react';

import { StyledList, StyledHeader, StyledPara } from "./styled";
import { StyledLinkIcon } from '../Util/Styled'

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
      <StyledLinkIcon/> {`http://localhost:${window.location.port}/api/${projectName}/mock`}
    </StyledPara>
  </StyledList>
)

export default ProjectList