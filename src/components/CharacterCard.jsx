import Card from "./Card"
import CharacterStats from "./CharacterStats"

function CharacterCard(props) {
    return (
      <Card>
        <h2>{props.name}</h2>
        <p>Description: {props.desc}</p>
        <CharacterStats exp={props.exp}/>
      </Card>
    );
}

export default CharacterCard;