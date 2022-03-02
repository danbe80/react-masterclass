const API_KEY = '8649939cb56656c3bd0052ccb1e4a89e';
const BASE_PATH = "https://api.themoviedb.org/3"

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minmum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  totla_results: number;
}

export function getMovies(){
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    response => response.json()
    );
}