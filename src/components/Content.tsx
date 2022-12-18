import { useEffect, useState } from "react";
import { apiGenres, apiMovies } from "../services/api";
import { MovieCard } from "./MovieCard";
import { useMain } from "../hooks/useMain";
import { GenreProps, MovieProps } from "../@types/movies";

export function Content() {
  const { selectedGenreId } = useMain();
  useEffect(() => {
    const movies = apiMovies(selectedGenreId);
    const genre = apiGenres(selectedGenreId);
    setMovies(movies);
    setSelectedGenre(genre[0]);
  }, [selectedGenreId]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreProps>(
    {} as GenreProps
  );

  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
