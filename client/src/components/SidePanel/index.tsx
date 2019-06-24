import React from 'react'

import { StyledSidePanel } from './styled'
import DeleteButton from '../StyledSwitch/Delete'
import EditButton from '../StyledSwitch/Edit'
import ShowButton from '../StyledSwitch/Show'

interface IProps {
  onClick: Function,
  activeButton?: string,
}

const SidePanel: React.FC<IProps> = ({ onClick,activeButton }) => (
  <StyledSidePanel>
    <ShowButton
      active={activeButton === 'SHOW' ? true : false}
      onClick={onClick}
    />
    <EditButton
      active={activeButton === 'EDIT' ? true : false}
      onClick={onClick}
    />
    <DeleteButton
      active={activeButton === 'DELETE' ? true : false}
      onClick={onClick}
    />
  </StyledSidePanel>
)
export default SidePanel