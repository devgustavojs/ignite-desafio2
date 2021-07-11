import { Button } from "./Button";

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface GenreProps{
  genres: Array<GenreResponseProps>;
  handleSelectGenre: Function;
  selectedGenreId: Number
}

export function SideBar(props:GenreProps) {
  // Complete aqui
  function handleClickButton(id: number) {
    
  }
  return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>
        <div className="buttons-container">
          {props.genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => props.handleSelectGenre(genre.id)}
              selected={props.selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
  )
}