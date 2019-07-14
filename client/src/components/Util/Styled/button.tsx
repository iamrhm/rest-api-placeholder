import styled from 'styled-components'

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
