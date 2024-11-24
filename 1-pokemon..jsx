import { useEffect, useState } from "react";

import "../../src/index.css";
import { PokemonCards } from "./2-PokemonCards";

export const PokemonProject = () => {
  useEffect(() => {
    document.title = "Pokemon Website";
  }, []);

  const [pokemon, setPokemon] = useState([]);
  const [loading, setloading] = useState(true);
  const [Error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const MyApi = "https://pokeapi.co/api/v2/pokemon?limit=252";

  const pokemonApi = async () => {
    try {
      const res = await fetch(MyApi);

      const data = await res.json();

      const detailedPokemonData = data.results.map(async (curpokemon) => {
        const res = await fetch(curpokemon.url);
        const data = await res.json();
        return data;
      });

      const detailedResponses = await Promise.all(detailedPokemonData);
      setPokemon(detailedResponses);

      setloading(false);
    } catch (error) {
      setError(error);
      setloading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    pokemonApi();
  }, []);

  // search data

  const searchfilter = pokemon.filter((curpokemon) =>
    curpokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="spinner ">
        <span className="spinner-border text-primary align-middle "></span>
        <h1>loading</h1>
      </div>
    );
  }
  if (Error) {
    return <h1>{Error.message}</h1>;
  }

  return (
    <section className="container ">
      <header>
        <h1 className="h fw-bold">Lets Catch Pokemon</h1>
        <input
          type="text"
          name="searchpokemon"
          className="inputsearch"
          placeholder=" Search Pokemon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>
      <ul className="card-demo  grid grid-cols-4">
        {searchfilter.map((currentpokemon) => {
          return (
            <PokemonCards
              key={currentpokemon.id}
              PokemonData={currentpokemon}
            />
          );
        })}
      </ul>
    </section>
  );
};
