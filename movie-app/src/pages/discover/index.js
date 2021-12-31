import React from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";
import axios from "axios";

const API_KEY = "4db02b1def98eb9a70b30a8e6e26eb06";

const Popular_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;

const requestPopular = axios.get(Popular_API);
const requestGenres = axios.get(
  `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en`
);

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
    //api call
    axios.all([requestPopular, requestGenres]).then(
      axios.spread((...responses) => {
        const responsePopular = responses[0];
        const responseGenres = responses[1];

        const popularFilms = responsePopular.data.results;

        const genres = responseGenres.data.genres;

        // console.log(responsePopular.data.results)

        // console.log(responseGenres.data.genres)
        this.setState({
          results: popularFilms,
          totalCount: popularFilms.length,
          genreOptions: genres,
        });
      })
    );
  }

  componentDidUpdate() {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=4db02b1def98eb9a70b30a8e6e26eb06&primary_release_year=${this.state.year}&query=${this.state.keyword}`
      )
      .then((response) => {
        const filmSearchResults = response.data.results;

        this.setState({
          results: filmSearchResults,
          totalCount: filmSearchResults.length,
        });
      });
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
        {/* <MobilePageTitle>Discover</MobilePageTitle> MobilePageTitle should become visible on small screens & mobile devices */}
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
`;

const TotalCounter = styled.div`
  font-weight: 900;
`;

const MovieResults = styled.div`
  position: relative;
  width: 800px;
`;

const MovieFilters = styled.div``;

const MobilePageTitle = styled.header``;
