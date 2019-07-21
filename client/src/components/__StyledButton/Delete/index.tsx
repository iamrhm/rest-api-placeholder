import React from 'react'
import { StyledRoundButton } from '../../Util/Styled/button'
import { StyledDeleteIcon } from '../../Util/Styled/icon'

interface IProps {
  onClick: Function,
  active?: boolean,
}

const DeleteButton: React.FC<IProps> = ({ onClick, active }) => (
  <StyledRoundButton
    width='28px'
    height='28px'
    active={active}
    onClick={(e) => onClick()}>
    <StyledDeleteIcon width='25px' height='26px' active={active} />
  </StyledRoundButton>
)

export default DeleteButton