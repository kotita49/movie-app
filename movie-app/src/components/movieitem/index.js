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
          <h5>{movie.title}</h5>
         <Genres> {genres.map((genre)=>(
            movie.genre_ids.indexOf(genre.id)>=0 && <label>{genre.name} | </label> 
          ))}</Genres>
<p>{movie.overview}</p>
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
width: 700px;
margin-left: 20px;
margin-right: 20px;
text-align: justify;
display: inline-block;
`
const Image = styled.img`
max-width: 200px;
padding: 20px;
`
const Genres = styled.label`
color: #c4ca18
`