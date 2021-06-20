import React from 'react'
import {
  StyledEditor,
  StyledDropDown,
  StyledTextContainer,
  StyledLeftColumn
} from "./styled";

import EndpointDetails from '../../model/endpoint'

interface IProps {
  endpointDetails: EndpointDetails,
}

const ShowResponse: React.FC<IProps> = ({ endpointDetails }) => {

  return (
    <StyledEditor>
      <StyledLeftColumn>
        <StyledDropDown>
          <option>{endpointDetails.status}</option>
        </StyledDropDown>
      </StyledLeftColumn>
      <StyledTextContainer
        readOnly={true}
        defaultValue={endpointDetails.response}
      />
    </StyledEditor>
  )
}
export default ShowResponse
