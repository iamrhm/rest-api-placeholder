import React from 'react'

import { StyledSidePanel } from './styled'
import DeleteButton from '../StyledButton/Delete'
import EditButton from '../StyledButton/Edit'
import ShowButton from '../StyledButton/Show'

interface IProps {
  onClick: Function,
  isShowResponseActive: boolean,
  isEditModeActive: boolean,
}

const SidePanel: React.FC<IProps> = ({ onClick, isShowResponseActive, isEditModeActive }) => (
  <StyledSidePanel>
    <ShowButton
      active={isShowResponseActive}
      onClick={onClick}
    />
    <EditButton
      active={isEditModeActive}
      onClick={onClick}
    />
    <DeleteButton
      active={false}
      onClick={onClick}
    />
  </StyledSidePanel>
)
export default SidePanel