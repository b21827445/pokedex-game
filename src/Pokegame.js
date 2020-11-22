import { Pokedex, pokemons24 } from './Pokedex';

function Pokegame() {
  let nums = [0, 1, 2, 3, 4, 5, 6, 7];
  let firstHand = nums.sort(() => Math.random() - Math.random()).slice(0, 4);
  let secHand = nums.filter((itm) => !firstHand.includes(itm));
  let firstHandPoks = [
    pokemons24[firstHand[0]],
    pokemons24[firstHand[1]],
    pokemons24[firstHand[2]],
    pokemons24[firstHand[3]],
  ];
  let secHandPoks = [
    pokemons24[secHand[0]],
    pokemons24[secHand[1]],
    pokemons24[secHand[2]],
    pokemons24[secHand[3]],
  ];
  let totalExp1 = firstHandPoks.reduce(
    (acc, curr) => acc + curr.base_experience,
    0
  );
  let totalExp2 = secHandPoks.reduce(
    (acc, curr) => acc + curr.base_experience,
    0
  );
  console.log(totalExp1, totalExp2);
  return (
    <div>
      <h2>Total exp of Group 1 : {totalExp1}</h2>
      <Pokedex
        indexes={firstHand}
        isWinner={totalExp1 > totalExp2 ? true : false}
      />
      <h2>Total exp of Group 2 : {totalExp2}</h2>
      <Pokedex
        indexes={secHand}
        isWinner={totalExp2 > totalExp1 ? true : false}
      />
    </div>
  );
}

export default Pokegame;
