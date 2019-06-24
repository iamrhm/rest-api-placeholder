import React from 'react'

import {
  StyledLargeColumn,
  StyledSmallCloumn,
  StyledRow,
  StyledEditor,
  StyledEndpointList,
  StyledDropDown,
  StyledTextContainer,
  StyledContainer,
} from "./styled";


import MenuButton from '../StyledButton/Menu'
import SidePanel from '../SidePanel'
import ResponseForm from '../Forms/Response'
import CloseButton from '../StyledButton/Close'

import EndpointDetails from '../../model/endpoint'

interface IProps {
  endpointDetails: EndpointDetails,
  onClick: Function,
  openMenu: boolean,
  showResponse: boolean,
  editMode: boolean,
  index: number,
  toggleActiveIndex: Function,
  updateEndpoint?: EndpointDetails,
  onChange?: Function,
  onUpdateErrorMsg?: string,
  activeButton?: string,
}

const EndpointList: React.FC<IProps> = ({
  endpointDetails, onClick, openMenu,
  showResponse, editMode, index, toggleActiveIndex,
  updateEndpoint, onChange, onUpdateErrorMsg, activeButton }) => (
    <StyledContainer>
      <StyledEndpointList>
        <StyledRow>
          <StyledSmallCloumn>{endpointDetails.method}</StyledSmallCloumn>
          <StyledLargeColumn>{endpointDetails.endpoint}</StyledLargeColumn>
          <StyledSmallCloumn>
            {
              openMenu ?
                <CloseButton
                  active={true}
                  onClick={(e: any) => (toggleActiveIndex(e, index))}
                />
                :
                <MenuButton
                  active={false}
                  onClick={(e: any) => (toggleActiveIndex(e, index))}
                />
            }
          </StyledSmallCloumn>
        </StyledRow>
        {
          showResponse && editMode === false &&
          <StyledEditor>
            <StyledDropDown>
              <option>{endpointDetails.status}</option>
            </StyledDropDown>
            <StyledTextContainer>
              <code>
                {endpointDetails.response}
              </code>
            </StyledTextContainer>
          </StyledEditor>
        }
        {
          editMode === true &&
          (updateEndpoint !== undefined) &&
          (onChange !== undefined) &&
          <ResponseForm
            inputparams={updateEndpoint}
            onChange={onChange}
            onClick={onClick}
            errorMsg={onUpdateErrorMsg !== undefined ? onUpdateErrorMsg : ''}
            updateFlag={true}
          />
        }
      </StyledEndpointList>
      <div>
        {
          openMenu &&
          <SidePanel
            activeButton={activeButton}
            onClick={onClick} />
        }
      </div>
    </StyledContainer>
  )

export default EndpointList
