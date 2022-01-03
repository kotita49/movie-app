import React from "react";
import styled from "styled-components";

export default class CheckBox extends React.Component {
  // Create a custom checkbox component

  render() {
    const {handleGenres, handleLangs, handleRatings, genreDisplay, langDisplay, ratingsDisplay, plusMinusGenres, plusMinusVote, plusMinusLang } =
      this.props;

    return (
      <div>
        <div>
          <CheckboxCont>
            <span onClick={handleGenres}>{plusMinusGenres} Select genre(s) {genreDisplay}</span>
          </CheckboxCont>
        </div>
        <div>
          <CheckboxCont>
            <span onClick={handleRatings}>{plusMinusVote} Select min. vote {ratingsDisplay}</span>
          </CheckboxCont>
        </div>
        <div>
          <CheckboxCont>
            <span onClick={handleLangs}> {plusMinusLang} Select language {langDisplay}</span>
          </CheckboxCont>
        </div>
       
      </div>
    );
  }
}

const CheckboxCont = styled.div`
  position: relative;
  text-align: left;
  list-style-type: square;
  padding-bottom: 10px;
  font-weight: 600;
`;
