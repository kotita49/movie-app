import React from "react";
import styled from "styled-components";

export default class CheckBox extends React.Component {
  // Create a custom checkbox component

  render() {
    const { genreDisplay, handleGenres, langDisplay, ratingsDisplay } =
      this.props;

    return (
      <div>
        <div>
          <CheckboxCont>
            <span onClick={handleGenres}>{genreDisplay}</span>
          </CheckboxCont>
        </div>
        <div>
          <CheckboxCont>
            <span onClick={handleGenres}>{langDisplay}</span>
          </CheckboxCont>
        </div>
        <div>
          <CheckboxCont>
            <span onClick={handleGenres}>{ratingsDisplay}</span>
          </CheckboxCont>
        </div>
      </div>
    );
  }
}

const CheckboxCont = styled.div`
  position: relative;
  text-align: left;
  list-style: disc;
`;
