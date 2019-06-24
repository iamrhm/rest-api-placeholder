import React from 'react'

import {
  StyledCustomeColumn,
  StyledInputContainer,
  StyledInputDropDown,
  StyledResponseInput,
  StyledErrorContainer,
} from "./styled";

import EndpointDetails from '../../../model/endpoint'

import SaveButton from '../../StyledButton/Save'
import UpdateButton from '../../StyledButton/Update'

interface IProps {
  inputparams: EndpointDetails,
  onChange: Function,
  onClick: Function,
  errorMsg: string,
  updateFlag?: boolean
}
const ResponseForm: React.FC<IProps> = ({ inputparams, onChange, onClick, errorMsg, updateFlag }) => (
  <StyledInputContainer>
    <StyledCustomeColumn width='30%'>
      <StyledInputDropDown
        value={inputparams.status}
        onChange={(e) => onChange(e, 'status')}
      >
        <option>200</option>
        <option>400</option>
      </StyledInputDropDown>
      <StyledErrorContainer>
        {
          <code>
            {errorMsg}
          </code>
        }
      </StyledErrorContainer>
      {
        updateFlag !== undefined ?
          <UpdateButton onClick={onClick} />
          : <SaveButton onClick={onClick} />
      }
    </StyledCustomeColumn>
    <StyledCustomeColumn width='70%'>
      <StyledResponseInput
        placeholder='{key:value,key:value}'
        value={inputparams.response}
        onChange={(e) => onChange(e, 'response')}
      />
    </StyledCustomeColumn>
  </StyledInputContainer>

)

export default ResponseForm
