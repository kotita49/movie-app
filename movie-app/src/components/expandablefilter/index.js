import React from "react";
import styled from "styled-components";

import Checkbox from "../checkbox";

export default class ExpandableFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      genresShown: false,
      langShown: false,
      ratingsSown: false,
    };
  }

  render() {
    const { genres, languages, ratings } = this.props;
    const handleGenres = () => {
      this.setState({ genresShown: !this.state.genresShown });
    };
    const handleLangs = () => {
      this.setState({ langShown: !this.state.langShown });
    };
    const handleRatings = () => {
      this.setState({ ratingsSown: !this.state.ratingsSown });
    };
    const genreDisplay = this.state.genresShown
      ? genres.map((genre) => <li key={genre.id}>{genre.name}</li>)
      : "";
    const langDisplay = this.state.langShown
      ? languages.map((lang) => <li key={lang.id}>{lang.name}</li>)
      : "";
    const ratingsDisplay = this.state.ratingsSown
      ? ratings.map((rat) => <li key={rat.id}>{rat.name}</li>)
      : "";
    const plusMinusGenres = this.state.genresShown ? "-" : "+";
    const plusMinusVote = this.state.ratingsSown ? "-" : "+";
    const plusMinusLang = this.state.langShown ? "-" : "+";
    return (
      <Filters>
        <Checkbox
          handleGenres={handleGenres}
          handleLangs={handleLangs}
          handleRatings={handleRatings}
          genreDisplay={genreDisplay}
          langDisplay={langDisplay}
          ratingsDisplay={ratingsDisplay}
          plusMinusGenres={plusMinusGenres}
          plusMinusVote={plusMinusVote}
          plusMinusLang={plusMinusLang}
        />
      </Filters>
    );
  }

  // You need to create your own checkbox component with a custom checkmark
}
const Filters = styled.div`
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
