import styled from 'styled-components'

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
`

export const StyledHeader = styled.div`
  width: 92%;
  height: 30%;
  font-family: 'Open Sans';
  font-size: 20px;
  padding: 0 4%;
  display:flex;
  justify-content: left;
  align-items:center;
  background-color: transparent;
  color:#424040d9;
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
  color: #272727c4;
`

export const StyledUrl = styled.span`
  display: block;
  text-align: left;
  padding: 2% 1%;
  font-size: 13px;
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  color: #272727a6;
`

