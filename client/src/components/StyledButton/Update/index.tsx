import React from 'react'
import {StyledRoundButton,StyledDoneIcon} from '../../Util/Styled'

interface IProps{
  float?: string,
  onClick: Function
}

const UpdateButton: React.FC <IProps>= ({float,onClick}) =>(
  <StyledRoundButton 
    width='64px' 
    height='64px' 
    boxShadow='-1px 1px 5px 0px #ccc, 1px 1px 5px 0px #ccc'
    borderRadius='5px'
    onClick={(e)=>onClick(e,'update')}
  >
    <StyledDoneIcon/>
  </StyledRoundButton>
)

export default UpdateButton