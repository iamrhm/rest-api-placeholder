import styled from 'styled-components'
import { Add } from 'styled-icons/material/Add'
import { Edit } from 'styled-icons/material/Edit'
import { Delete } from 'styled-icons/material/Delete'
import { Eye as Show } from 'styled-icons/icomoon/Eye'
import { Menu } from 'styled-icons/feather/Menu'
import { Save } from 'styled-icons/feather/Save'
import { Update } from 'styled-icons/material/Update'
import { Close } from 'styled-icons/material/Close'
import { Link2 as LinkIcon } from 'styled-icons/feather/Link2'
import { Done } from 'styled-icons/material/Done'

const DefaultIcon = {
  width: '48%',
  height: '47%',
}

const DefaultRoundButton = {
  width: '68px',
  height: '68px',
}

const DefaultButton = {
  width: '94%',
  height: '90%',
}

interface IProps {
  width?: string,
  height?: string,
  float?: string,
  boxShadow?: string,
  borderRadius?: string,
  active?: boolean,
}

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
export const StyledDefaultButton = styled.button`
  width: ${(props: IProps) =>
    (props.width !== undefined ? props.width : DefaultButton.width)};
  height: ${(props: IProps) =>
    (props.height !== undefined ? props.height : DefaultButton.height)};
  border:none;
  background-color:#fff;
  :focus{
    outline:none;
  };
  box-shadow:  ${(props: IProps) =>
    (props.boxShadow !== undefined ? props.boxShadow : '')};
  border-radius:  ${(props: IProps) =>
    (props.borderRadius !== undefined ? props.borderRadius : '0px')};
  :active{
    transform:scale(.95)
  }
  font-size: 18px;
  font-family: 'Open Sans';
  padding: 5%;
  color: #403d3de3;
`
export const StyledRoundButton = styled.button`
  width: ${(props: IProps) =>
    (props.width !== undefined ? props.width : DefaultRoundButton.width)};
  height: ${(props: IProps) =>
    (props.height !== undefined ? props.height : DefaultRoundButton.height)};
  border-radius:50%;
  border:.5px solid #cccccc54;
  bottom:0;
  float:${(props: IProps) =>
    (props.float !== undefined ? props.float : '')};;
  :focus{
    outline:none;
  }
  box-shadow: 3px 1px 5px 0px #cccccc57, -2px 2px 5px 0px #cccccc6e;
  background-color:#fff;
  display:flex;
  justify-content:center;
  align-content:center;
  :active{
    transform:scale(.95)
  }
`

export const StyledEditIcon = styled(Edit)`
  width: ${(props: IProps) =>
    (props.width !== undefined ? props.width : DefaultIcon.width)};
  height: ${(props: IProps) =>
    (props.height !== undefined ? props.height : DefaultIcon.height)};
  color: ${(props: IProps) => (props.active ? '#2196f3b3' : '#949292')};
`
export const StyledDeleteIcon = styled(Delete)`
  width: ${(props: IProps) =>
    (props.width !== undefined ? props.width : DefaultIcon.width)};
  height: ${(props: IProps) =>
    (props.height !== undefined ? props.height : DefaultIcon.height)};
  color: ${(props: IProps) => (props.active ? '#2196f3b3' : '#949292')};
`
export const StyledShowIcon = styled(Show)`
  width: ${(props: IProps) =>
    (props.width !== undefined ? props.width : DefaultIcon.width)};
  height: ${(props: IProps) =>
    (props.height !== undefined ? props.height : DefaultIcon.height)};
  color: ${(props: IProps) => (props.active ? '#2196f3b3' : '#949292')};
`

export const StyledMenuIcon = styled(Menu)`
  width: ${(props: IProps) =>
    (props.width !== undefined ? props.width : DefaultIcon.width)};
  height: ${(props: IProps) =>
    (props.height !== undefined ? props.height : DefaultIcon.height)};
  color: ${(props: IProps) => (props.active ? '#2196f3b3' : '#949292')};
`
export const StyledSaveIcon = styled(Save)`
  width: ${(props: IProps) =>
    (props.width !== undefined ? props.width : DefaultIcon.width)};
  height: ${(props: IProps) =>
    (props.height !== undefined ? props.height : DefaultIcon.height)};
  color: ${(props: IProps) => (props.active ? '#2196f3b3' : '#949292')};
`

export const StyledAddIcon = styled(Add)`
  width: ${(props: IProps) =>
    (props.width !== undefined ? props.width : DefaultIcon.width)};
  height: ${(props: IProps) =>
    (props.height !== undefined ? props.height : DefaultIcon.height)};
  color: ${(props: IProps) => (props.active ? '#2196f3b3' : '#949292')};
  transform: ${(props: IProps) => (props.active ? 'rotate(45deg)' : '')};
`

export const StyledUpdateIcon = styled(Update)`
  width: ${(props: IProps) =>
    (props.width !== undefined ? props.width : DefaultIcon.width)};
  height: ${(props: IProps) =>
    (props.height !== undefined ? props.height : DefaultIcon.height)};
  color: ${(props: IProps) => (props.active ? '#2196f3b3' : '#949292')};
`
export const StyledCloseIcon = styled(Close)`
  width: ${(props: IProps) =>
    (props.width !== undefined ? props.width : DefaultIcon.width)};
  height: ${(props: IProps) =>
    (props.height !== undefined ? props.height : DefaultIcon.height)};
  color: ${(props: IProps) => (props.active ? '#2196f3b3' : '#949292')};
`

export const StyledLinkIcon = styled(LinkIcon)`
  width:20px;
  height:20px;
  color:#2196f3b3;
`
export const StyledDoneIcon = styled(Done)`
  width:20px;
  height:20px;
  color:#2196f3b3
`