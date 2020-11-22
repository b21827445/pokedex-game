import Pokecard from './Pokecard';

const pokemons24 = [
  { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
  { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
  { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
  { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
  { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
];

function convertIdToImg(id) {
  if (id < 10) {
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${id}.png`;
  } else if (id < 100) {
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${id}.png`;
  } else {
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
  }
}
function Pokedex(props) {
  return (
    <div>
      {props.isWinner ? (
        <h2 className="winner-text">We are the winners!</h2>
      ) : null}
      <div className="Pokecards">
        {props.indexes.map((i) => {
          return (
            <Pokecard
              key={pokemons24[i].id}
              name={pokemons24[i].name}
              type={pokemons24[i].type}
              exp={pokemons24[i].base_experience}
              src={convertIdToImg(pokemons24[i].id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export { Pokedex, pokemons24 };
