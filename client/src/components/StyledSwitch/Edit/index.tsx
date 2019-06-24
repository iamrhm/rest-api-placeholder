import React from 'react'
import { StyledEditIcon, StyledRoundButton } from '../../Util/Styled'

interface IProps {
  onClick: Function,
  active: boolean,
}

const EditButton: React.FC<IProps> = ({ onClick, active }) => (
  <StyledRoundButton
    active={active}
    width='28px'
    height='28px'
    onClick={(e: any) => onClick(e, 'edit')}>
    <StyledEditIcon width='25px' height='26px' active={active}/>
  </StyledRoundButton>
)

export default EditButton