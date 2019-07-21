import React from 'react'
import { StyledDoneIcon, StyledLoadIcon } from '../../Util/Styled/icon'
import { StyledRoundButton } from '../../Util/Styled/button'

interface IProps {
  onClick: Function,
  success: boolean,
  isLoading: boolean,
}

const DoneButton: React.FC<IProps> = ({ onClick, success, isLoading }) => {
  function getIcon() {
    if (success) {
      return <StyledDoneIcon success={true} />
    }
    else if (isLoading) {
      return (
        <StyledLoadIcon />
      )
    } else {
      return <StyledDoneIcon />
    }
  }
  return (
    <StyledRoundButton
      width='64px'
      height='64px'
      boxShadow='-1px 1px 5px 0px #ccc, 1px 1px 5px 0px #ccc'
      borderRadius='5px'
      onClick={(e) => onClick()}
    >
      {getIcon()}
    </StyledRoundButton>
  )
}

export default DoneButton