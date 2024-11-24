export const PokemonCards = ({ PokemonData }) => {
  return (
    //  <li>{PokemonData.name}</li>

    <li className="pokemon-card">
      <figure className="m-0">
        <img
          src={PokemonData.sprites.other.dream_world.front_default}
          alt={PokemonData.name}
          className="pokemon-image"
        />
      </figure>

      <h2 className="namepokeman m-0">{PokemonData.name}</h2>
      <p>
        <span className="types ">
          {PokemonData.types.map((curtype) => curtype.type.name).join(", ")}
        </span>
      </p>
      <div className="  grid-three-cols ">
        <div>
          <span>Height : </span>
          <span> {PokemonData.height}</span>
        </div>
        <div>
          <span> Weight : </span>
          <span> {PokemonData.weight}</span>
        </div>
        <div>
          <span> Speed : </span>
          <span> {PokemonData.stats[5].base_stat}</span>
        </div>

        <div>
          <span> Experience : </span>
          <p>{PokemonData.base_experience}</p>
        </div>
        <div>
          <span> Attack : </span>
          <p>{PokemonData.stats[1].base_stat}</p>
        </div>
        <div>
          <span> Abilities :</span>
          <p>
            {PokemonData.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
        </div>
      </div>
    </li>
  );
};
