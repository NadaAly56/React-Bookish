
export const List = ({ book, children }) => {
  return <li>
    <img src={book.Poster} alt={`${book.Title} cover`} />
    <h3>{book.Title}</h3>
    <div>
        {children}
    </div>
  </li>;

};
