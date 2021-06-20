import React from 'react'

import { StyledSidePanel } from './styled'
import DeleteButton from '../__StyledButton/Delete'
import EditButton from '../__StyledButton/Edit'
import ShowButton from '../__StyledButton/Show'

interface IProps {
  onClick: Function,
  mode: string,
}

const SidePanel: React.FC<IProps> = ({ mode, onClick }) => (
  <StyledSidePanel>
    <ShowButton
      active={mode === 'show'}
      onClick={() => onClick('show')}
    />
    <EditButton
      active={mode==='edit'}
      onClick={() => onClick('edit')}
    />
    <DeleteButton
      active={mode==='delete'}
      onClick={() => onClick('delete')}
    />
  </StyledSidePanel>
)
export default SidePanel