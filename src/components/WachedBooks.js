import { useState } from "react";
import { Button } from "./Button";
import { List } from "./List";
import { WachedBooksStats } from "./WachedBooksStats";

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];


export const WachedBooks = () => {

  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);
  

  return <div className="box">
    <Button isOpen={isOpen2} onSetIsOpen={setIsOpen2} />
    {isOpen2 && (
      <>
       <WachedBooksStats watched={watched} />
        <ul className="list">
          {watched.map((book) => (
            <List book={book} key={book.imdbID}>
              <div>
                <p>
                  <span>⭐️</span>
                  <span>{book.imdbRating}</span>
                </p>
                <p>
                  <span>🌟</span>
                  <span>{book.userRating}</span>
                </p>
                <p>
                  <span>⏳</span>
                  <span>{book.runtime} min</span>
                </p>
              </div>
            </List>
          ))}
        </ul>
      </>
    )}
  </div>;
};

