import React, { ReactNode } from 'react'

import {
  StyledLargeColumn,
  StyledSmallCloumn,
  StyledRow,
  StyledEndpointList,
  StyledContainer,
} from "./styled";


import MenuButton from '../__StyledButton/Menu'
import SidePanel from '../SidePanel'

import EndpointDetails from '../../model/endpoint'

interface IProps {
  endpointDetails: EndpointDetails,
  index: number,
  activeState: boolean,
  toggleActiveIndex: Function,
  toggleMode: Function,
  mode: string

  children: ReactNode,
}

const EndpointList: React.FC<IProps> = ({
  endpointDetails, index, activeState, toggleActiveIndex, toggleMode, mode, children }) => {

  function renderConditionalSidebar() {
    if (activeState)
      return (
        <SidePanel
          mode={mode}
          onClick={toggleMode} />
      )
    else
      return null
  }

  return (
    <StyledContainer>
      <StyledEndpointList>

        <StyledRow>
          <StyledSmallCloumn>{endpointDetails.method}</StyledSmallCloumn>
          <StyledLargeColumn>{endpointDetails.endpoint}</StyledLargeColumn>
          <StyledSmallCloumn>
            <MenuButton
              active={activeState}
              onClick={() => (toggleActiveIndex(index))}
            />
          </StyledSmallCloumn>
        </StyledRow>

        {children}

      </StyledEndpointList>

      <div>
        {renderConditionalSidebar()}
      </div>
    </StyledContainer>
  )
}
export default EndpointList
