import CharacterCard from "./components/CharacterCard";
import GuildMasterCard from "./components/GuildMasterCard";

function App() {
  const characters = [
    {
      id: "c1",
      name: "Knight",
      desc: "Fierce warrior in hand-to-hand combat",
      exp: 1600
    },
    {
      id: "c2",
      name: "Valkyrie",
      desc: "Agile combatant with distance attacks",
      exp: 900
    },
    {
      id: "c3",
      name: "Dwarf",
      desc: "Robust fighter",
      exp: 1700
    }
  ]
  return (
    <div>
      <h1>Character Selection</h1>
      <GuildMasterCard title="Guild Master"
       specialty="Leader"/>

      {
        characters.map((character) => (
          <CharacterCard
           key={character.id}
           name={ character.name }
           desc= { character.desc }
           exp= { character.exp }
          />
        ))
      }
    </div>
  );
}

export default App
