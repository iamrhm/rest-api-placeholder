import styled, { keyframes } from 'styled-components'

export const StyledList = styled.div`
  width: 30%;
  height: 220px;
  min-width:220px;
  border-radius: 5px;
  color: #403d3d;
  box-shadow: 3px 4px 5px 0px #ccc, -2px 1px 5px 0px #ccc;
  font-family: 'Open Sans';
  margin: 1.5%;
  :hover{
    box-shadow: 4px 5px 6px 1px #ccc, -2px 3px 6px 1px #ccc;
  };
  cursor: pointer;
  background-color:#fff;
  position:relative;
`

export const StyledHeader = styled.div`
  width: 92%;
  height: 30%;
  font-family: 'Open Sans';
  font-size: 20px;
  color:#424040;
  padding: 0 4%;
  display:flex;
  justify-content: left;
  align-items:center;
  background-color: transparent;
  overflow-y:auto;
`

export const StyledPara = styled.p`
  width: 92%;
  height: 70%;
  font-family: 'Open Sans';
  font-size: 17px;
  color: #3c3939f0;
  padding: 0 4%;
  word-wrap: break-word;
  margin:0;
  overflow-y:auto;
  color: #272727c4;
`
export const StyledProjectInput = styled.input`
  width: 92%;
  height: 30%;
  font-family : 'Open Sans';
  font-size: 20px;
  color:#424040;
  border:none;
  :focus{
    outline:none;
  }
`
export const SubmitContainer = styled.div`    
  position: absolute;
  bottom: 5%;
  right: 5%;
`

const flashAnimation = keyframes`
  0% {
      opacity: 1;
  }
  100% {
      opacity: 0;
  }
`

export const ErrorMsgContainer = styled.div`
  border-radius: 5px;
  width: 70%;
  height: 25%;
  position: absolute;
  bottom: 5%;
  left: 5%;
  font-size:16px;
  font-family : 'Open Sans';
  background: rgb(132, 131, 131);
  color: #ffff;
  display:flex;
  justify-content:center;
  align-items:center;
  animation: ${flashAnimation} 1s ease-in-out 3s forwards;
`

