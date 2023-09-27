import  Navbar  from "./components/Navbar";
import { Books } from "./components/Books";
import { WachedBooks } from "./components/WachedBooks";

export default function App() { 

  return (
    <>
     <Navbar />
      <main className="main">
        <Books />
        <WachedBooks />
      </main>
    </>
  );
}


