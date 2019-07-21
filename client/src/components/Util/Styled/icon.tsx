import styled from 'styled-components';
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
import { LoaderAlt as LoadIcon } from 'styled-icons/boxicons-regular/LoaderAlt'
import { Server } from 'styled-icons/fa-solid/Server'
import {RightArrowAlt as Go} from 'styled-icons/boxicons-regular/RightArrowAlt'

const DefaultIcon = {
  width: '48%',
  height: '47%',
}

interface IProps {
  width?: string,
  height?: string,
  float?: string,
  boxShadow?: string,
  borderRadius?: string,
  active?: boolean,
  success?: boolean,
}

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
  width:25px;
  height:25px;
  color:#2196f3b3;
  transform:rotate(30deg);
`
export const StyledDoneIcon = styled(Done)`
  width:25px;
  height:25px;
  color: ${(props: IProps) => (props.success ? '#27aa80' : '#2196f3b3')};
`
export const StyledServerIcon = styled(Server)`
  width: ${(props: IProps) => (props.width ? props.width : '25px')};
  height: ${(props: IProps) => (props.width ? props.height : '25px')};
  color:#2196f3b3;
`

export const StyledLoadIcon = styled(LoadIcon)`
  width: ${(props: IProps) => (props.width ? props.width : '25px')};
  height: ${(props: IProps) => (props.width ? props.height : '25px')};
  color:#2196f3b3;
  animation: spin 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const StyledGoIcon = styled(Go)`
  width: ${(props: IProps) =>
    (props.width !== undefined ? props.width : DefaultIcon.width)};
  height: ${(props: IProps) =>
    (props.height !== undefined ? props.height : DefaultIcon.height)};
  color: ${(props: IProps) => (props.active ? '#2196f3b3' : '#949292')};
`