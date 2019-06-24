import React from 'react'
import { StyledDeleteIcon, StyledRoundButton } from '../../Util/Styled'

interface IProps {
  onClick: Function,
  active: boolean,
}

const DeleteButton: React.FC<IProps> = ({ onClick, active }) => (
  <StyledRoundButton
    width='28px'
    height='28px'
    active={active}
    onClick={(e: any) => onClick(e, 'delete')}>
    <StyledDeleteIcon width='25px' height='26px' active={active} />
  </StyledRoundButton>
)

export default DeleteButton