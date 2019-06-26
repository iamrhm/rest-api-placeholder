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
  index: number,

  onClick: Function,
  toggleActiveIndex: Function,

  openMenu: boolean,
  showResponse: boolean,
  editMode: boolean,

  updateEndpoint?: EndpointDetails,
  onChange?: Function,
  onUpdateErrorMsg?: string
}

const EndpointList: React.FC<IProps> = ({
  endpointDetails, index, toggleActiveIndex, onClick, openMenu,
  showResponse, editMode, updateEndpoint, onChange, onUpdateErrorMsg }) => (
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
          openMenu && showResponse && !editMode &&
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
          editMode && !showResponse && (updateEndpoint !== undefined) &&
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
            isShowResponseActive = {showResponse}
            isEditModeActive = {editMode}
            onClick={onClick} />
        }
      </div>
    </StyledContainer>
  )

export default EndpointList
