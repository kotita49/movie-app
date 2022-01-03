import axios from 'axios';



// All of your API requests should be in this file



 const Popular_API = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc`;
 const GenresAPI = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en`

 const requestPopular = axios.get(Popular_API);
 const requestGenres = axios.get(GenresAPI);


export const fetchAll = () => axios.all([requestPopular, requestGenres])




  
