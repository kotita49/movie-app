import React from "react";
import styled from "styled-components";

import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";
import axios from "axios";

export default class Discover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
      year: 0,
      results: [],
      totalCount: 0,
      genreOptions: [],
      ratingOptions: [
        { id: 7.5, name: 7.5 },
        { id: 8, name: 8 },
        { id: 8.5, name: 8.5 },
        { id: 9, name: 9 },
        { id: 9.5, name: 9.5 },
        { id: 10, name: 10 },
      ],
      languageOptions: [
        { id: "GR", name: "Greek" },
        { id: "EN", name: "English" },
        { id: "RU", name: "Russian" },
        { id: "PO", name: "Polish" },
      ],
    };
  }
  componentDidMount() {
    fetcher.fetchAll().then(
      axios.spread((...responses) => {
        const responsePopular = responses[0];
        const responseGenres = responses[1];

        const popularFilms = responsePopular.data.results;
        const genres = responseGenres.data.genres;

        this.setState({
          results: popularFilms,
          totalCount: popularFilms.length,
          genreOptions: genres,
        });
      })
    )
    .catch(err => console.error(err));
  }

  componentDidUpdate() {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&primary_release_year=${this.state.year}&query=${this.state.keyword}`
      )
      .then((response) => {
        const filmSearchResults = response.data.results;

        this.setState({
          results: filmSearchResults,
          totalCount: filmSearchResults.length,
        });
      })
      .catch(err => console.error(err));
  }
  // Write a function to preload the popular movies when page loads & get the movie genres

  // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters

  render() {
    const {
      genreOptions,
      languageOptions,
      ratingOptions,
      totalCount,
      results,
    } = this.state;
    const onKeywordChange = (e) => {
      this.setState({ keyword: e.target.value });
    };

    const onYearChange = (e) => {
      this.setState({ year: e.target.value });
    };
    return (
      <DiscoverWrapper>
        <MobilePageTitle> Discover</MobilePageTitle>
        <MovieFilters>
          <SearchFilters
            genres={genreOptions}
            ratings={ratingOptions}
            languages={languageOptions}
            searchMovies={(keyword, year) => this.searchMovies(keyword, year)}
            onKeywordChange={onKeywordChange}
            onYearChange={onYearChange}
          />
        </MovieFilters>
        <MovieResults>
          {totalCount > 0 && <TotalCounter>{totalCount} results</TotalCounter>}
          <MovieList movies={results || []} genres={genreOptions || []} />
        </MovieResults>
      </DiscoverWrapper>
    );
  }
}

const DiscoverWrapper = styled.main`
  padding: 60px 35px;
  @media screen and (max-width: 1200px) {
    max-width: 1000px;
  }
  @media screen and (max-width: 800px) {
    max-width: 800px;
  }
  @media screen and (max-width: 600px) {
    max-width: 500px;
  }
  @media screen and (max-width: 400px) {
    max-width: 350px;
  }
`;

const TotalCounter = styled.div`
  font-weight: 900;
  @media screen and (max-width: 1200px) {
    font-size: 20px;
    padding-left: 160px;
  }
  @media screen and (max-width: 400px) {
    padding-left: 100px;
  }
`;

const MovieResults = styled.div`
  position: relative;
  @media screen and (max-width: 1200px) {
    max-width: 1000px;
  }
  @media screen and (max-width: 800px) {
    max-width: 500px;
  }
  @media screen and (max-width: 600px) {
    max-width: 400px;
  }
`;

const MovieFilters = styled.div`
  margin-right: 14px;
`;

const MobilePageTitle = styled.h1`
  margin-left: 280px;
  margin-top: -120px;
  @media screen and (min-width: 800px) {
    display: none !important;
  }
  @media screen and (max-width: 700px) {
    margin-left: 250px;
  }
  @media screen and (max-width: 500px) {
    margin-left: 180px;
  }
  @media screen and (max-width: 400px) {
    margin-left: 110px;
  }
`;
