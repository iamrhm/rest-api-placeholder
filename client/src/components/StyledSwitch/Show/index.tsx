import React from 'react'
import { StyledShowIcon, StyledRoundButton } from '../../Util/Styled'

interface IProps {
  onClick: Function,
  active: boolean,
}

const ShowButton: React.FC<IProps> = ({ onClick, active }) => (
  <StyledRoundButton
    width='28px'
    height='28px'
    active={active}
    onClick={(e: any) => onClick(e, 'show')}
  >
    <StyledShowIcon width='25px' height='26px' active={active} />
  </StyledRoundButton>
)

export default ShowButton