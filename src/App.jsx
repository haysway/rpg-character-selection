import CharacterCard from "./components/CharacterCard";
import GuildMasterCard from "./components/GuildMasterCard";
import ItemCard from "./components/ItemCard";

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

  const items = [
    {
      id: "i1",
      title: "Great Axe",
      type: "slashing",
      damage: 7
    },
    {
      id: "i1",
      title: "Poisoners Dagger",
      type: "Piercing",
      damage: 4
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
      {
        items.map((item) => (
          <ItemCard 
           key={item.id}
           title={item.title}
           type={item.type}
           damage={item.damage}
          />
        )) 
      }
    </div>
  );
}

export default App
