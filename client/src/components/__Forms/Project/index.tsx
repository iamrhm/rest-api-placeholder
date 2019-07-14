import React from 'react';

import { StyledList, StyledHeader, StyledPara, StyledProjectInput, StyledUrl, SubmitContainer,ErrorMsgContainer } from "./styled";
import { StyledRoundButton } from '../../Util/Styled/button'
import { StyledLinkIcon, StyledDoneIcon } from '../../Util/Styled/icon'
import ErrorContainer from '../../Error'

interface IProps {
  projectName: string,
  onChange: Function,
  onClick: Function,
  errorMsg: string,
  clearErrorMsg: Function
}

const ProjectForm: React.FC<IProps> = ({ projectName, onChange, onClick, errorMsg, clearErrorMsg }) => {
  const dynamicURL = projectName ? projectName : 'Your_Projectname'

  function getUrl() {
    return (
      <StyledUrl>
        {`http://localhost:${window.location.port}/api/`}
        <strong style={{ color: '' }}>{dynamicURL}</strong>
        {`/mock`}
      </StyledUrl>
    )
  }

  function renderError() {
    if (errorMsg.length > 0) {
      return (
        <ErrorMsgContainer>
          <ErrorContainer
            errorMsg={errorMsg}
            onClick={clearErrorMsg}
          />
        </ErrorMsgContainer>
      )
    } else {
      return null
    }
  }

  return (
    <StyledList>
      <StyledHeader>
        <StyledProjectInput
          placeholder='Enter Project Name'
          value={projectName}
          onChange={(e) => onChange(e)} />
      </StyledHeader>
      <StyledPara>
        <StyledLinkIcon />
        {getUrl()}
      </StyledPara>
        {renderError()}
      <SubmitContainer>
        <StyledRoundButton width='34px' height='34px'>
          <StyledDoneIcon onClick={(e) => onClick(e, 'Save')} />
        </StyledRoundButton>
      </SubmitContainer>
    </StyledList>
  )
}

export default ProjectForm