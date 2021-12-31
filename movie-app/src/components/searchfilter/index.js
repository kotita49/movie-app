import React from "react";
import styled, { css } from "styled-components";

import * as colors from "../../colors";
import ExpandableFilter from "../../components/expandablefilter";
import SearchBar from "../../components/searchbar";

export default class SearchFilters extends React.Component {
  render() {
    const {
      genres,
      ratings,
      languages,
      searchMovies,
      onKeywordChange,
      onYearChange,
    } = this.props;

    return (
      <FiltersWrapper>
        <SearchFiltersCont className="search_inputs_cont" marginBottom>
          <SearchBar
            searchMovies={searchMovies}
            onKeywordChange={onKeywordChange}
            onYearChange={onYearChange}
          />
          {/* Implement a "SearchBar" component and re-use it for the keyword and the year inputs */}
        </SearchFiltersCont>
        <SearchFiltersCont>
          <CategoryTitle>Movies</CategoryTitle>

          <ExpandableFilter
            genres={genres}
            ratings={ratings}
            languages={languages}
          />
          {/* Implement a component called "ExpandableFilter" and apply it to all filter categories */}
        </SearchFiltersCont>
      </FiltersWrapper>
    );
  }
}

const FiltersWrapper = styled.div`
  position: relative;
  float: right;
  width: 350px;
  text-align: center;
`;

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  margin-top: 33px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const CategoryTitle = styled.div``;
