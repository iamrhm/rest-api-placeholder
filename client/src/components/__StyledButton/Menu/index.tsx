import React from 'react'

import { StyledMenuIcon, StyledCloseIcon } from '../../Util/Styled/icon';
import { StyledDefaultButton } from '../../Util/Styled/button';

interface IProps {
  onClick: Function,
  active: boolean,
}

const MenuButton: React.FC<IProps> = ({ onClick, active }) => {
  function renderIcon() {
    if (active)
      return <StyledCloseIcon active={true} />
    else
      return <StyledMenuIcon />
  }

  return (
    <StyledDefaultButton
      active={active}
      onClick={(e: any) => onClick(e)}
    >
      {renderIcon()}
    </StyledDefaultButton>
  )
}

export default MenuButton;