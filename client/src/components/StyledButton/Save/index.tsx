import React from 'react'
import { StyledDefaultButton, StyledSaveIcon } from '../../Util/Styled';

interface IProps {
  onClick: Function
}
const SaveButton: React.FC<IProps> = ({ onClick }) => (
  <StyledDefaultButton 
    width='60%' 
    height='60%' 
    boxShadow='-1px 1px 5px 0px #ccc, 1px 1px 5px 0px #ccc'
    borderRadius='5px'
    onClick={(e: any) => onClick(e, 'save')}>
    <StyledSaveIcon />
  </StyledDefaultButton>
)
export default SaveButton