import React from 'react'
import { StyledLoadIcon } from '../Util/Styled/icon'
import { StyledLoadderWrapper } from './styled'


const Loader: React.FC = () => {
  return (
    <StyledLoadderWrapper>
      <StyledLoadIcon width="32px" height="32px" />
    </StyledLoadderWrapper>
  )
}
export default Loader

