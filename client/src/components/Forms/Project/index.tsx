import React from 'react';

import { StyledList, StyledHeader, StyledPara, StyledProjectInput } from "./styled";

interface IProps {
  projectInput: {
    name: string,
  },
  onChange: Function
}

const ProjectForm: React.FC<IProps> = ({ projectInput, onChange }) => (
  <StyledList>
    <StyledHeader>
      <StyledProjectInput
        placeholder='Enter Project Name'
        value={projectInput.name}
        onChange={(e) => onChange(e, 'project-name')} />
    </StyledHeader>
    <StyledPara>
      Base URL : <br />
      <StyledPara>`http://localhost:${window.location.port}/api/${projectInput.name}/mock`</StyledPara>
    </StyledPara>
  </StyledList>
)

export default ProjectForm