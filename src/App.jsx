import CharacterCard from "./components/CharacterCard";
import GuildMasterCard from "./components/GuildMasterCard";

function App() {
  return (
    <div>
      <h1>Character Selection</h1>
      <GuildMasterCard title="Guild Master"
       specialty="Leader"/>
       
      <CharacterCard name="Knight"
       desc="Fierce warrior in hand-to-hand combat"
       exp="1600"/>

      <CharacterCard name="Valkyrie"
       desc="Agile combatant with distance attacks"
       exp="900"/>
    </div>
  );
}

export default App
