import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://pokeapi.co/api/v2/pokemon?limit=10")
      .then((res) => res.json())
      .then((data) => setPokemon(data.results));
  }, []);

  const filteredPokemon = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(search.toLowerCase()),
  );

  console.log("랜더링 중...");

  return (
    <div>
      <h1>포켓몬 도감</h1>
      <a style={{ display: "flex", justifyContent: "flex-end" }}>
        <input
          type="text"
          placeholder="포켓몬 이름 검색"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </a>
      <ul>
        {filteredPokemon.map((poke) => (
          <li key={poke.name}>{poke.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
