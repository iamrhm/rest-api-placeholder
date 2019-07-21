import React from 'react'
import { StyledGoIcon } from '../../Util/Styled/icon'
import { StyledRoundButton } from '../../Util/Styled/button'

interface IProps {
  onClick: Function,
  active?: boolean,
}

const GoButton: React.FC<IProps> = ({ onClick, active }) => (
  <StyledRoundButton
    width='30px'
    height='30px'
    active={active}
    onClick={(e) => onClick()}>
    <StyledGoIcon width='25px' height='26px' active={active} />
  </StyledRoundButton>
)

export default GoButton