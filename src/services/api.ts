import { genre, movies } from "../data";
export const apiMovies = (genre_id?: number | string) => {
  return movies.filter((item) =>
    genre_id ? item.Genre_id === +genre_id : item
  );
};
export const apiGenres = (genre_id?: number | string) => {
  return genre.filter((item) => (genre_id ? item.id === +genre_id : item));
};
