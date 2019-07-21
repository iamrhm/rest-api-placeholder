import styled from 'styled-components';
import { Search } from 'styled-icons/boxicons-regular/Search';

export const SearchIcon = styled(Search)`
  background-color: white;
  height:32px;
  width:32px;
  color: #949292;
`
export const StyledIcon = styled.i`
  width:12%;
  height:48px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px 0 0 5px;
`

export const StyledSearchInputBox = styled.input`
  width: 88%;
  color: #403d3d;
  font-family: 'Open Sans';
  font-size: 24px;
  border:none;
  border-radius: 0 5px 5px 0;
  :focus{
    outline:none
  }
`

export const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 40%;
  background-color: #EBF5EE;
  text-align: center;
  height: 48px;
  box-shadow: 3px 4px 5px 0px #ccc;
`