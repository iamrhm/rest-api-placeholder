import React from 'react'

import { StyledDefaultButton, StyledMenuIcon } from '../../Util/Styled';

interface IProps {
  onClick: Function,
  active: boolean,
}

const MenuButton: React.FC<IProps> = ({ onClick, active }) => (
  <StyledDefaultButton
    active={active}
    onClick={(e: any) => onClick(e, 'menu')}
  >
    <StyledMenuIcon active={active} />
  </StyledDefaultButton>
)

export default MenuButton;