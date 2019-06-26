import React from 'react'
import {StyledUpdateIcon,StyledDefaultButton} from '../../Util/Styled'

interface IProps{
  float?: string,
  onClick: Function
}

const UpdateButton: React.FC <IProps>= ({float,onClick}) =>(
  <StyledDefaultButton 
    width='62%' 
    height='60%' 
    boxShadow='-1px 1px 5px 0px #ccc, 1px 1px 5px 0px #ccc'
    borderRadius='5px'
    onClick={(e)=>onClick(e,'update')}
  >
    {/* <StyledUpdateIcon /> */}
    UPDATE
  </StyledDefaultButton>
)

export default UpdateButton