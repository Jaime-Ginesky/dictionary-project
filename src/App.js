import './App.css';
import Search from "./Search.js";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      </header>
      <main>
        <h1>Dictionary</h1>
        <Search defaultKeyword="dictionary" />
      </main>
      <footer className="text-center">
        <small>Coded by {" "} 
        <a href="https://naughty-herman-ab01e.netlify.app/" 
           target="blank"
           rel="noreferrer">Jaime Ginesky{" "}</a>{" "} and is {" "}
        <a href="https://github.com/Jaime-Ginesky/dictionary-project" 
          target="blank"
          rel="noreferrer">open-sourced on Git Hub.</a>
        </small>
      </footer>
    </div>
  </div>
  );
}

export default App;
