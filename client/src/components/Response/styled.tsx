import styled from 'styled-components'

export const StyledEditor = styled.div`
  width: 100%;
  min-height: 280px;
  position: relative;
  border-top: .3px solid #403d3de3;
  padding-top:2%;
  display:flex ;
  flex-direction:row;
  display:center;
  align-items:center;
  justify-content:space-around;
  text-align:center;
`
export const StyledLeftColumn = styled.div`
    width: 23%;
    position: relative;
    height: 224px;
`
export const StyledDropDown = styled.select`
  width: 100%;
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
export const StyledTextContainer = styled.textarea`
  border-radius: 5px;
  height:180px;
  width: 62%;
  padding:4% 0%;
  font-size: 16px;
  font-family:  'Open Sans',source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  color:#403d3d;
  word-wrap: break-word;
  white-space: pre-line;
  text-align: center;
  line-height: 1.5em;
  background: #403d3d0f;
  resize:none;
  border:none;
`