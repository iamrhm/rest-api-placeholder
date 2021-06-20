import styled, { keyframes, css } from 'styled-components'
import { Close } from 'styled-icons/material/Close'

interface IProps {
  active: boolean
}

/*--- KeyFrames And Animation --- */
const swing = keyframes`
15%
  {
    -webkit-transform: translateX(5px);
    transform: translateX(5px);
  }
  30%
  {
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px);
  }
  50%
  {
    -webkit-transform: translateX(3px);
    transform: translateX(3px);
  }
  65%
  {
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px);
  }
  80%
  {
    -webkit-transform: translateX(2px);
    transform: translateX(2px);
  }
  100%
  {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
`

const swingAnimation = css`
  animation: ${swing} 1.2s forwards ease-in;
`
/*--- End --- */


/* --- Style --- */
export const ErrorBlockContainer = styled.div`
  position:relative;
  border-radius: 5px;
  width: 95%;
  height: 38px;
  font-size:12px;
  display:flex;
  justify-content:center;
  align-items:center;
  box-shadow:
    2px 2px #f44336c4,
    2px 2px #f44336c4,
    3px 3px #f44336c4;
  -webkit-transform: translateX(-3px);
  transform: translateX(-3px);

  ${(props: IProps) => props.active ? swingAnimation : ''}
`

export const StyledErrorBlock = styled.div`
  position:absolute;
  border-radius: 5px;
  width: 94%;
  height: 38px;
  font-size:12px;
  font-family:  'Open Sans',source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  color:#403d3d;
  background:#fff;
  display:flex;
  justify-content:center;
  align-items:center;
`

export const CrossIconContainer = styled(Close)`
  width:13px;
  height: 13px;
  color:#f44336c4;
  position:absolute;
  top:1px;
  right:1px;
`

