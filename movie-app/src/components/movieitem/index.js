import React from "react";
import styled from "styled-components";

import * as colors from "../../colors";

export default class MovieItem extends React.Component {
  render() {
    const { movie, genres } = this.props;
    return (
      // Complete the MovieItem component
      <MovieItemWrapper>
        <LeftCont>
          <Image
            alt={movie.title}
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
          />
        </LeftCont>
        <RightCont>
          <h4>
            {movie.title} <Rating>{movie.vote_average}</Rating>
          </h4>
          <Genres>
            {" "}
            {genres.map(
              (genre) =>
                movie.genre_ids.indexOf(genre.id) >= 0 && (
                  <label key={genre.id}>{genre.name} | </label>
                )
            )}
          </Genres>
          <Overview>{movie.overview}</Overview>
          <Date>{movie.release_date}</Date>
        </RightCont>
      </MovieItemWrapper>
    );
  }
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
  padding: 20px;
  margin-bottom: 15px;
  float: left;
`;

const LeftCont = styled.div`
  display: inline-block;
  float: left;
`;

const RightCont = styled.div`
  max-width: 450px;
  margin-left: 20px;
  margin-right: 20px;
  display: inline-block;
  @media screen and (max-width: 800px) {
    max-width: 600px;
  }
  @media screen and (max-width: 600px) {
    max-width: 400px;
  }
  @media screen and (max-width: 500px) {
    max-width: 290px;
  }
`;
const Image = styled.img`
  max-width: 200px;
  padding: 20px;
`;
const Genres = styled.p`
  color: ${colors.primaryColor};
  font-weight: 600;
`;
const Overview = styled.p`
  text-align: justify;
`;

const Rating = styled.span`
  text-align: center;
  margin-left: 400px;
  border: 4px solid ${colors.primaryColor};
  background-color: ${colors.primaryColor};
  width: 3em;
  color: white;
  @media screen and (max-width: 800px) {
    margin-left: 350px;
  }
  @media screen and (max-width: 500px) {
    margin-left: 250px;
  }
`;

const Date = styled.p`
  color: ${colors.primaryColor};
  font-weight: 200;
`;
