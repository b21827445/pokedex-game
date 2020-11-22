import './Pokecard.css';

function Pokecard({
  name = 'Charmander',
  src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
  type = 'normal',
  exp = '62',
}) {
  return (
    <div className="Pokecard-itm">
      <h2 className="Pokecard-name">{name}</h2>
      <img className="Pokecard-img" src={src} alt="Pokecard" />
      <p className="Pokecard-type">{type}</p>
      <p className="Pokecard-exp">EXP: {exp}</p>
    </div>
  );
}

export default Pokecard;
