import React from 'react';

import { StyledList, StyledHeader, StyledPara } from "./styled";

interface Iprops {
  name: string,
  handleClick: Function,
}

const ProjectList: React.FC = () => (
  <StyledList>
    <StyledHeader>
      Lorem Ipsum
      </StyledHeader>
    <StyledPara>
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      Use As Blog Form
      </StyledPara>
  </StyledList>
)

export default ProjectList