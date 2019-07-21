import React from 'react'

import {
  StyledRow,
  StyledFatColumn,
  StyledSlimCloumn,
  StyledEndpointList,
  StyledContainer,
  StyledInputDropDown,
  StyledUrlInput,
} from "./styled";

import { ClientEndpointDetails } from '../../../model/endpoint'
import ResponseForm from '../Response'

interface IProps {
  inputparams: ClientEndpointDetails,
  onChange: Function,
  onClick: Function,
  errorMsg: string,
  clearErrorMsg: Function
}
const EndpointForm: React.FC<IProps> = ({ inputparams, onChange, onClick, errorMsg, clearErrorMsg }) => (
  <StyledContainer>
    <StyledEndpointList>
      <StyledRow>
        <StyledSlimCloumn>
          <StyledInputDropDown
            value={inputparams.method}
            onChange={(e) => onChange(e, 'method')}
          >
            <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
            <option>DELETE</option>
          </StyledInputDropDown>
        </StyledSlimCloumn>
        <StyledFatColumn>
          <StyledUrlInput
            placeholder='add/your/mock/endpoint'
            value={inputparams.endpoint}
            onChange={(e) => onChange(e, 'endpoint')}
          />
        </StyledFatColumn>
      </StyledRow>
      <ResponseForm
        inputparams={inputparams}
        onChange={onChange}
        onClick={onClick}
        errorMsg={errorMsg}
        clearErrorMsg={clearErrorMsg}
      />
    </StyledEndpointList>
  </StyledContainer>
)

export default EndpointForm
