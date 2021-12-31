import React from "react";
import styled from 'styled-components';

import { primaryColor } from "../../colors";


export default class MovieItem extends React.Component {

  render () {
    
    const { movie, genres} = this.props;
    return (
      // Complete the MovieItem component
      <MovieItemWrapper>
        <LeftCont>
<Image alt={movie.title} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}/>
        </LeftCont>
        <RightCont>
          <h4>{movie.title} <Rating>{movie.vote_average}</Rating></h4>
          
         <Genres> {genres.map((genre)=>(
            movie.genre_ids.indexOf(genre.id)>=0 && <label key={genre.id}>{genre.name} | </label> 
          ))}</Genres>
<Overview>{movie.overview}</Overview>
<Date>{movie.release_date}</Date>
          </RightCont>
      </MovieItemWrapper>
    )
  }
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
padding: 0 15px 15px 45px;
float: left;

`

const LeftCont = styled.div`
  display: inline-block;
  float: left;

`

const RightCont = styled.div`
max-width: 450px;
margin-left: 20px;
margin-right: 20px;

display: inline-block;
`
const Image = styled.img`
max-width: 150px;
padding: 20px;
`
const Genres = styled.p`
color: #c4ca18;
font-weight: 600;
`
const Overview = styled.p`
text-align: justify;
`

const Rating = styled.span`
text-align: center;
margin-left: 400px;
border: 4px solid #c4ca18;
background-color: #c4ca18;
width: 3em;
color: white;
`

const Date = styled.p`
color: #c4ca18;
font-weight: 200;
`