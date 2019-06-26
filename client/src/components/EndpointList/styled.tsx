import styled from 'styled-components'

export const StyledLargeColumn = styled.div`
  width : 76%;
  height: 100px;
  overflow-x:auto;
  display:flex;
  justify-content:left;
  align-items:center;
  padding: 2% 4%;
`
export const StyledSmallCloumn = styled.div`
  width:14%;
  height:100px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  /* border-right: .5px solid #403d3d47;
  border-left: .5px solid #403d3d47; */
`
export const StyledRow = styled.div`
  width: 100%;
  height:100px;
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
`
export const StyledEndpointList = styled.div`
  width:80%;
  min-height:100px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  box-shadow: 1px 2px 5px 0px #ccc;
  font-family : 'Open Sans';
  font-size: 20px;
  color: #403d3de3;
  border-radius:5px;
  margin-bottom: 2%;
  :hover{
    box-shadow:-1px 5px 7px 0px #ccc, 2px 5px 7px 0px #ccc
  }
`
export const StyledEditor = styled.div`
  width: 100%;
  min-height: 184px;
  position: relative;
  border-top: .3px solid #403d3de3;
  padding-top:2%;
  display:flex;
  flex-direction:row;
  display:center;
  align-items:center;
  justify-content:space-around;
  text-align:center;
`
export const StyledDropDown = styled.select`
  width: 20%;
  height: 44px;
  border: .5px solid #403d3d47;
  font-size: 18px;
  font-family: 'Open Sans';
  background:#fff;
  color:#403d3d;
  :focus{
    outline: none
  }
  text-align-last:center;
`
export const StyledTextContainer = styled.div`
  width: 62%;
  padding:4% 0%;
  font-size: 16px;
  font-family: 'Open Sans';
  color:#403d3d;
  word-wrap: break-word;
  white-space: pre-line;
  text-align:left;
`
export const StyledContainer = styled.div`
  position: relative;
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
`