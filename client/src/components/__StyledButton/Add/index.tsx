import React from 'react'
import { StyledAddIcon } from '../../Util/Styled/icon'
import {StyledRoundButton} from '../../Util/Styled/button'

interface IProps {
  float?: string,
  onClick: Function,
  active: boolean,
}

const AddButton: React.FC<IProps> = ({ float, onClick, active }) => (
  <StyledRoundButton
    float={float}
    onClick={(e) => onClick(e, 'add')}
  >
    <StyledAddIcon active={active} />
  </StyledRoundButton>
)

export default AddButton