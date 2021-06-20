import React from 'react';
import { SearchIcon, StyledIcon, StyledSearchInputBox, StyledSearchBar } from './styled'

interface IProrps {
  searchQuery?: string
}

const SearchBar: React.FC<IProrps> = (props: IProrps) => (
  
  <StyledSearchBar>
    <StyledIcon>
      <SearchIcon />
    </StyledIcon>
    <StyledSearchInputBox placeholder='Serach'/>
  </StyledSearchBar>
)
export default SearchBar