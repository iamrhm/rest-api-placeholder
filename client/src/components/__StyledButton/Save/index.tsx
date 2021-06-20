import React from 'react'
import { StyledDoneIcon } from '../../Util/Styled/icon';
import { StyledRoundButton } from '../../Util/Styled/button';

interface IProps {
  onClick: Function,

}
const SaveButton: React.FC<IProps> = ({ onClick }) => (
  <StyledRoundButton
    width='64px'
    height='64px'
    boxShadow='-1px 1px 5px 0px #ccc, 1px 1px 5px 0px #ccc'
    borderRadius='5px'
    onClick={(e: any) => onClick(e, 'save')}>
    <StyledDoneIcon />
  </StyledRoundButton>
)
export default SaveButton