import { useEffect, useState } from "react";
import { apiGenres } from "../services/api";
import { Button } from "./Button";
import { useMain } from "../hooks/useMain";
interface GenreProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export function SideBar() {
  const { selectedGenreId, handleClickButton } = useMain();
  const [genres, setGenres] = useState<GenreProps[]>([]);
  useEffect(() => {
    const genres = apiGenres();
    setGenres(genres);
  }, []);

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
