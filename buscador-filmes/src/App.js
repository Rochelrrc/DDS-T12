
import './App.css';
import { useRef } from 'react';

function App() {

  const movies = [
    { id: 1, name: "Interestelar" },
    { id: 2, name: "O Poderoso Chefão" },
    { id: 3, name: "A Origem" },
    { id: 4, name: "Clube da Luta" },
    { id: 5, name: "Matrix" },
    { id: 6, name: "Pulp Fiction" },
    { id: 7, name: "Cidade de Deus" },
    { id: 8, name: "O Senhor dos Anéis: O Retorno do Rei" },
    { id: 9, name: "O Iluminado" },
    { id: 10, name: "A Lista de Schindler" }
  ];

  const inputRef = useRef(null);

  function searchMovie() {
    if (!inputRef.current.value.trim()) {
      return;
    }

    const moviesLi = document.querySelectorAll("li");

    for (let movie of moviesLi) {
      if (movie.textContent.toLowerCase().includes(inputRef.current.value.toLowerCase())) {
        movie.style.display = 'block';
        continue;
      }

      movie.style.display = 'none';
    }

  }

  function clearSearch() {
    const moviesLi = document.querySelectorAll("li");

    for (let movie of moviesLi) {
      movie.style.display = 'block';
    }

    inputRef.current.value = "";
  }


  return (
    <div className="container">

      <div>
        <input type='text' placeholder='Digite aqui' ref={inputRef} />
        <button onClick={searchMovie}>Buscar</button>
        <button onClick={clearSearch}>Limpar</button>
      </div>

      <ul>
        {movies.map((movie) =>
          <li key={movie.id}>{movie.name}</li>
        )}
      </ul>

    </div>
  );
}

export default App;
