import "./App.css";
import { loadPokemons } from "./service/service-helper";
import { useState, useEffect } from "react";
import Pokemon from "./components/Pokemon";
import Header from "./components/Header";

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedPokemons, setLoadedPokemons] = useState([]);

  const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
  useEffect(() => {
    setIsLoading(true);
    loadPokemons(BASE_URL).then((res) => {
      setLoadedPokemons(res);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <main>
      <Header />
      <div className="container">
        {
          loadedPokemons.map((pokemon, index) => {
            return <Pokemon pokemonData={pokemon} key={index} />;
          })
        }
      </div>
    </main>
  );
}

export default App;
