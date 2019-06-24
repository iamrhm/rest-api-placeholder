import React from 'react'

import { StyledDefaultButton, StyledCloseIcon } from '../../Util/Styled';

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