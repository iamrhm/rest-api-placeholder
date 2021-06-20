import React, { useEffect, useState } from 'react'

import {
  StyledErrorBlock,
  CrossIconContainer,
  ErrorBlockContainer
} from "./styled";

interface IProps {
  errorMsg: string,
  onClick: Function
}
const ErrorContainer: React.FC<IProps> = ({ errorMsg, onClick }) => {
  const [state, setState] = useState(false)
  useEffect(() => {
    if (errorMsg.length > 0) {
      setState(true)
    } else {
      setState(false)
    }
    return () => {
      setState(false)
    }
  }, [errorMsg])
  return (
    <ErrorBlockContainer active={state}>
      <StyledErrorBlock>
        <CrossIconContainer onClick={(e) => onClick()} />
        {errorMsg}
      </StyledErrorBlock>
    </ErrorBlockContainer>
  )
}
export default ErrorContainer