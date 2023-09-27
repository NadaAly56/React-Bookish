
const average = (arr) => arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export const WachedBooksStats = ({ watched }) => {
  const avgImdbRating = average(watched.map((book) => book.imdbRating));
  const avgUserRating = average(watched.map((book) => book.userRating));
  const avgRuntime = average(watched.map((book) => book.runtime));

  return <div className="summary">
    <h2>Books you watched</h2>
    <div>
      <p>
        <span>#️⃣</span>
        <span>{watched.length} Books</span>
      </p>
      <p>
        <span>⭐️</span>
        <span>{avgImdbRating}</span>
      </p>
      <p>
        <span>🌟</span>
        <span>{avgUserRating}</span>
      </p>
      <p>
        <span>⏳</span>
        <span>{avgRuntime} min</span>
      </p>
    </div>
  </div>;
};
