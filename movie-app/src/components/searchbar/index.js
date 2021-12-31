import React from "react";
import styled from 'styled-components';

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";

export default class SearchBar extends React.Component {
    render () {
        const { searchMovies, onKeywordChange, onYearChange } = this.props; 
            
        return (
<div>
    <form>
        <div>
    <InputKeyword className="search" type='search' placeholder='Search for movies' value={searchMovies.keyword} onChange={onKeywordChange} ></InputKeyword>
    </div>
    <div>
    <InputYear className="search" type='search' placeholder="Year of release" value={searchMovies.year} onChange={onYearChange}></InputYear>
  </div>
  </form>
  </div>
        )
}
}

const InputKeyword = styled.input`
background-image: url(${SearchIcon});
background-repeat: no-repeat;
height: 40px;
margin: 10px 10px;
padding-left: 35px;
border: none;
border-bottom: 2px solid #c4ca18;
color: #c4ca18;
font-weight: 600;
`

const InputYear = styled.input`
background-image: url(${CalendarIcon});
background-repeat: no-repeat;
height: 40px;
padding-left: 35px;
border: none;
margin: 10px 10px;
border-bottom: 2px solid #c4ca18;
color: #c4ca18;
font-weight: 600;
`