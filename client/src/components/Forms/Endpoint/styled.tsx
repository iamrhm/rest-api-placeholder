import styled from 'styled-components'

interface IProps {
  width?: string,
  height?: string,
}

export const StyledRow = styled.div`
  width: 100%;
  height:100px;
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
`
export const StyledFatColumn = styled.div`
  width : 80%;
  height: 100px;
  overflow-x:auto;
  display:flex;
  justify-content:center;
  align-items:center;
  padding: 2% 4%;
`
export const StyledSlimCloumn = styled.div`
  width:20%;
  height:100px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`
export const StyledEndpointList = styled.div`
  width:80%;
  min-height:360px;
  margin-top:5%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius:5px;
  box-shadow: 1px 2px 5px 0px #ccc;
`
export const StyledContainer = styled.div`
  position: relative;
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
`
export const StyledInputDropDown = styled.select`
  width: 85%;
  height: 42px;
  border: none;
  font-size: 18px;
  font-family: 'Open Sans';
  background:#fff;
  color:#403d3d;
  :focus{
    outline: none
  };
  border: 1px solid #403d3d61;
  border-radius:10%;
  text-align-last:center;
`
export const StyledUrlInput = styled.input`
  width:100%;
  height:75%;
  font-family : 'Open Sans';
  font-size: 20px;
  color: #403d3de3;
  border:none;
  :focus{
    outline:none;
  }
`