import React from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";
import FilterIcon from "../../images/filter-icon.png";

export default class SearchBar extends React.Component {
  render() {
    const { searchMovies, onKeywordChange, onYearChange } = this.props;

    return (
      <div>
        <form>
          <div>
            <InputKeyword
              className="search"
              type="search"
              placeholder="Search for movies"
              value={searchMovies.keyword}
              onChange={onKeywordChange}
            ></InputKeyword>
            <Filter alt="filter" src={FilterIcon} />
          </div>
          <div>
            <InputYear
              className="search"
              type="search"
              placeholder="Year of release"
              value={searchMovies.year}
              onChange={onYearChange}
            ></InputYear>
          </div>
        </form>
      </div>
    );
  }
}

const InputKeyword = styled.input`
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;

  height: 40px;
  margin: 10px auto;
  padding-left: 35px;
  border: none;
  border-bottom: 2px solid ${colors.primaryColor};
  color: ${colors.primaryColor};
  font-weight: 600;
  @media screen and (max-width: 800px) {
    width: 500px;
    background-color: ${colors.lightBackground};
  }
  @media screen and (max-width: 700px) {
    width: 400px;
  }

  @media screen and (max-width: 600px) {
    max-width: 300px;
  }
  @media screen and (max-width: 400px) {
    max-width: 200px;
  }
`;

const InputYear = styled(InputKeyword)`
  background-image: url(${CalendarIcon});
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const Filter = styled.img`
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;
