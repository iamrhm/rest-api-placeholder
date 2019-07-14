import React from 'react'

import { StyledDefaultButton } from '../../Util/Styled/button';
import { StyledCloseIcon } from '../../Util/Styled/icon'

interface IProps {
  onClick: Function,
  active: boolean,
}

const CloseButton: React.FC<IProps> = ({ onClick, active }) => (
  <StyledDefaultButton
    active={active}
    onClick={(e: any) => onClick(e, 'menu')}
  >
    <StyledCloseIcon active={active} />
  </StyledDefaultButton>
)

export default CloseButton;