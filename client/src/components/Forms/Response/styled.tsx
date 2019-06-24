import styled from 'styled-components'

interface IProps {
  width?: string,
  height?: string,
}

export const StyledCustomeColumn = styled.div`
  width:${(props:IProps)=>(props.width?props.width:'20%')};
  min-height:${(props:IProps)=>(props.height?props.height:'260px')};
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:center; 
`
//Input Component
export const StyledInputContainer = styled.div`
  width: 100%;
  min-height: 280px;
  position: relative;
  border-top: .3px solid #403d3de3;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-around;
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

export const StyledResponseInput = styled.textarea`
    width: 90%;
    height: 240px;
    font-family: 'Open Sans';
    font-size: 20px;
    color: #403d3de3;
    border: none;
    resize: none;
    padding-top:2%;
    :focus{
    outline:none;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    line-height: 220px;
  }
  :-moz-placeholder { /* Firefox 18- */
    line-height: 220px;  
  }
  ::-moz-placeholder {  /* Firefox 19+ */
    line-height: 220px;  
  }
  :-ms-input-placeholder {  
    line-height: 220px; 
  }
`

export const StyledErrorContainer = styled.div`
  width: 70%;
  border-radius:5px;
  font-size: 18px;
  font-family: 'Open Sans';
  color:#403d3d;
  word-wrap: break-word;
`