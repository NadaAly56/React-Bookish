import { useState } from "react";
import { Button } from "./Button";
import { List } from "./List";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];
export const Books = () => {
  const [books, setBooks] = useState(tempMovieData);
  const [isOpen1, setIsOpen1] = useState(true);

  return <div className="box">
    <Button isOpen={isOpen1} onSetIsOpen={setIsOpen1} />
    {isOpen1 && (
      <ul className="list">
        {books?.map((book) => (
          <List book={book} key={book.imdbID}>
            <span>🗓</span>
            <span>{book.Year}</span>
          </List>
        ))}
      </ul>
    )}
  </div>;
};
