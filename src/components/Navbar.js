import { useState } from "react";

const Navbar = ({ books }) => {
  const [query, setQuery] = useState("");

  return <nav className="nav-bar">
    <div className="logo">
      <span role="img">🔖</span>
      <h1>BOOKISH</h1>
    </div>
    <input
      className="search"
      type="text"
      placeholder="Search books..."
      value={query}
      onChange={(e) => setQuery(e.target.value)} />
    <p className="num-results">
      {/* Found <strong>{books.length}</strong> results */}
    </p>
  </nav>;
};
export default Navbar