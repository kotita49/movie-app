import React from "react";
import styled from "styled-components";

import Checkbox from "../checkbox";

export default class ExpandableFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filtersShown: true,
    };
  }

  render() {
    const { genres, languages, ratings } = this.props;
    const handleGenres = () => {
      this.setState({ filtersShown: !this.state.filtersShown });
    };
    const genreDisplay = !this.state.filtersShown
      ? genres.map((genre) => <li key={genre.id}>{genre.name}</li>)
      : "+ Select genres";
    const langDisplay = !this.state.filtersShown
      ? languages.map((lang) => <li key={lang.id}>{lang.name}</li>)
      : "+ Select languages";
    const ratingsDisplay = !this.state.filtersShown
      ? ratings.map((rat) => <li key={rat.id}>{rat.name}</li>)
      : "+ Select min. vote";
    return (
      <div>
        <Checkbox
          handleGenres={handleGenres}
          genreDisplay={genreDisplay}
          langDisplay={langDisplay}
          ratingsDisplay={ratingsDisplay}
        />
      </div>
    );
  }

  // You need to create your own checkbox component with a custom checkmark
}
