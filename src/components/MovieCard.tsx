import { Star, Clock } from "react-feather";
import { MovieCardContainer } from "./styles";
interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}

export function MovieCard(props: MovieCardProps) {
  return (
    <MovieCardContainer>
      <div className="movie-card">
        <img src={props.poster} alt={props.title} />

        <div>
          <div className="movie-info">
            <span>{props.title}</span>
            <div className="meta">
              <div>
                <Star /> {props.rating}
              </div>

              <div>
                <Clock /> {props.runtime}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MovieCardContainer>
  );
}
