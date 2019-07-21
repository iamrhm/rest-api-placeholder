import React from 'react'

import {
  StyledResponseInput,
  StyledEditor,
  StyledDropDown,
  StyledLeftColumn,
} from "./styled";

import { ClientEndpointDetails } from '../../../model/endpoint'
import ErrorContainer from '../../Error'

import DoneButton from '../../__StyledButton/DoneButton'
interface IProps {
  inputparams: ClientEndpointDetails,
  onChange: Function,
  onClick: Function,
  errorMsg: string,
  clearErrorMsg: Function
}

const ResponseForm: React.FC<IProps> = ({ inputparams, onChange, onClick, errorMsg, clearErrorMsg }) => {

  function renderErrorMsg() {
    if (errorMsg.length > 0) {
      return (
        <ErrorContainer
          errorMsg={errorMsg}
          onClick={clearErrorMsg}
        >
          {errorMsg}
        </ErrorContainer>
      )
    } else {
      return null
    }
  }

  return (
    <StyledEditor>
      <StyledLeftColumn>
        <StyledDropDown
          value={inputparams.status}
          onChange={(e) => onChange(e, 'status')}
        >
          <option>200</option>
          <option>400</option>
        </StyledDropDown>
        {renderErrorMsg()}

        {/* #TODO: Success and IsLoading from Props*/}
        <DoneButton
          success={false}
          isLoading={false}
          onClick={onClick}
        />

      </StyledLeftColumn>
      <StyledResponseInput
        readOnly={false}
        placeholder='{key:value,key:value}'
        value={inputparams.response}
        onChange={(e) => onChange(e, 'response')}
      />
    </StyledEditor>


  )
}

export default ResponseForm
