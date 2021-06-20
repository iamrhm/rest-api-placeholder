import styled from 'styled-components'

export const StyledContainer = styled.div`
  width:60%;
  height:82vh;
  position: relative;
  padding:0 20%;
  overflow-y: auto;
`
export const StyledHeader = styled.div`
  width: 100%;
  height: 15vh;
  padding: 2% 0 0 0;
  display:flex;
  justify-content: center;
  align-items: center;
  position:sticky;
  top:0;
  background-color:transparent;
  z-index: 3;
`

export const StyledAppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: 'Open Sans';

  :focus{
    outline : none
  }
`
