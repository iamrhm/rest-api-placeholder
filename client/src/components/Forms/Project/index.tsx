import React from 'react';

import { StyledList, StyledHeader, StyledPara, StyledProjectInput, SubmitContainer, ErrorMsgContainer } from "./styled";
import { StyledLinkIcon, StyledDoneIcon, StyledRoundButton } from '../../Util/Styled'

interface IProps {
  projectName: string,
  onChange: Function,
  onClick: Function,
  errorMsg: string
}

const ProjectForm: React.FC<IProps> = ({ projectName, onChange, onClick, errorMsg }) => (
  <StyledList>
    <StyledHeader>
      <StyledProjectInput
        placeholder='Enter Project Name'
        value={projectName}
        onChange={(e) => onChange(e, 'project-name')} />
    </StyledHeader>
    <StyledPara>
      <StyledLinkIcon /> <br />
      {`http://localhost:${window.location.port}/api/${projectName ? projectName : '{your projectname}'}/mock`}
    </StyledPara>
    {
      errorMsg !== undefined && errorMsg !== '' &&
      <ErrorMsgContainer>
        {errorMsg}
      </ErrorMsgContainer>
    }
    <SubmitContainer>
      <StyledRoundButton width='34px' height='34px'>
        <StyledDoneIcon onClick={(e) => onClick(e, 'Save')} />
      </StyledRoundButton>
    </SubmitContainer>
  </StyledList>
)

export default ProjectForm