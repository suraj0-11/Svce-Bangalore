import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Main from "./Components/Home/Main";
import Footer from "./Components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
